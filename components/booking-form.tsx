"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { DayPicker, type DateRange } from "react-day-picker"
import {
  CalendarCheck2, Check, ChevronRight, ChevronLeft, Loader2, Mail,
  MessageCircle, Phone, ShieldCheck, Sparkles, User, Users,
  BadgePercent, PartyPopper, Clock, Baby, Dog, Car, Moon, UtensilsCrossed,
  Plus, Minus,
} from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import "react-day-picker/dist/style.css"

type RoomType = "single" | "double" | "triple" | "quad"
type BookingStep = 1 | 2 | 3 | 4
const ROOM_TYPES: RoomType[] = ["single", "double", "triple", "quad"]
const ROOM_CAPACITY: Record<RoomType, number> = { single: 1, double: 2, triple: 3, quad: 4 }

interface RoomPriceInfo { type: RoomType; pricePerNight: number; bookingPrice: number; savings: number }
interface AvailabilityData {
  available: boolean; blockedDates: string[]; pricePerNight: number;
  bookingPricePerNight: number; totalPrice: number; bookingTotalPrice: number;
  savings: number; nights: number; roomsAvailable: number
}

interface ExtrasData {
  pet: boolean; crib: boolean; parking: boolean; lateCheckIn: boolean; dietaryNeeds: string
}

function formatDate(d: Date): string { return d.toISOString().split("T")[0] }
function formatDateDisplay(dateStr: string, lang: string): string {
  const d = new Date(dateStr + "T12:00:00")
  return d.toLocaleDateString(lang === "it" ? "it-IT" : "en-US", { weekday: "short", day: "numeric", month: "short" })
}

export default function BookingForm() {
  const { language, t } = useLanguage()
  const [step, setStep] = useState<BookingStep>(1)
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")

  // Step 1
  const [dateRange, setDateRange] = useState<DateRange | undefined>()
  const [blockedDates, setBlockedDates] = useState<Record<string, string[]>>({})
  const [prices, setPrices] = useState<RoomPriceInfo[]>([])
  const [calendarLoading, setCalendarLoading] = useState(true)

  // Step 2
  const [roomSelections, setRoomSelections] = useState<Record<RoomType, number>>({
    single: 0,
    double: 1,
    triple: 0,
    quad: 0,
  })
  const [availabilityByRoom, setAvailabilityByRoom] = useState<Partial<Record<RoomType, AvailabilityData>>>({})
  const [roomCheckLoading, setRoomCheckLoading] = useState(false)

  // Step 3
  const [guest, setGuest] = useState({ name: "", email: "", phone: "", notes: "", adults: 2, children: 0 })
  const [extras, setExtras] = useState<ExtrasData>({ pet: false, crib: false, parking: false, lateCheckIn: false, dietaryNeeds: "" })

  const copy = useMemo(() => language === "it" ? {
    eyebrow: "Prenota direttamente",
    title: "Tariffa ufficiale, -10% prenotando qui.",
    subtitle: "Applichiamo il 10% di sconto diretto sul tariffario ufficiale 2026/27 (periodi A/B/C).",
    step1: "Date", step2: "Camera", step3: "Chi sei", step4: "Fatto",
    selectDates: "Quando vuoi venire?",
    selectDatesHelper: "Tocca la data di arrivo e poi quella di partenza.",
    next: "Avanti", back: "Indietro",
    chooseRoom: "Scegli quante camere per ogni tipologia",
    chooseRoomHelper: "Puoi combinare singole, doppie, triple e quadruple nella stessa richiesta.",
    checking: "Calcolo prezzo...", priceEstimate: "Prezzo stimato per il tuo soggiorno",
    nightsLabel: "notti", nightLabel: "notte", perNight: "/notte",
    total: "Totale", saveLabel: "Risparmi", vsBooking: "sul tariffario ufficiale",
    roomsNeeded: "Camere selezionate",
    roomsCapacity: "Capienza massima",
    availableLabel: "Disponibili",
    notAvailable: "Non disponibile",
    pickAtLeastOneRoom: "Seleziona almeno una camera per continuare.",
    guestDetails: "Dicci chi sei",
    guestHelper: "Per poterti confermare la prenotazione.",
    namePlaceholder: "Nome e cognome", emailPlaceholder: "Email", phonePlaceholder: "Telefono",
    notesPlaceholder: "Altre richieste? (opzionale)",
    adults: "Adulti", childrenLabel: "Bambini",
    extrasTitle: "Ti serve qualcosa in più?",
    extraPet: "Porto un animale", extraCrib: "Culla in camera",
    extraParking: "Parcheggio", extraLateCheckIn: "Check-in dopo le 22",
    extraDietary: "Esigenze alimentari (colazione)",
    dietaryPlaceholder: "Es. senza glutine, vegano...",
    sendWhatsApp: "Invia richiesta su WhatsApp",
    sendingLabel: "Un attimo...",
    sentTitle: "Richiesta inviata! 🎉",
    sentHelper: "Ti rispondiamo su WhatsApp entro pochi minuti con la conferma della disponibilità.",
    sentWaiting: "Risposta in arrivo entro pochi min",
    newBooking: "Nuova prenotazione",
    benefits: ["Sconto diretto del 10% sul tariffario ufficiale", "Cancellazione flessibile", "Parli direttamente con noi", "Conferma rapida su WhatsApp"],
    roomLabels: { single: "Singola", double: "Doppia", triple: "Tripla", quad: "Quadrupla" } as Record<RoomType, string>,
    roomGuests: { single: "1 persona", double: "2 persone", triple: "3 persone", quad: "4 persone" } as Record<RoomType, string>,
    callUs: "Preferisci chiamarci?",
    error: "Qualcosa non ha funzionato. Riprova o chiamaci.",
    summaryLabel: "Riepilogo",
  } : {
    eyebrow: "Book directly",
    title: "Official rate, 10% off when booking here.",
    subtitle: "We apply a direct 10% discount on the official 2026/27 tariff (A/B/C seasons).",
    step1: "Dates", step2: "Room", step3: "About you", step4: "Done",
    selectDates: "When are you coming?",
    selectDatesHelper: "Tap your arrival date, then your departure date.",
    next: "Next", back: "Back",
    chooseRoom: "Choose how many rooms per type",
    chooseRoomHelper: "You can combine single, double, triple and quadruple rooms in one request.",
    checking: "Calculating price...", priceEstimate: "Estimated price for your stay",
    nightsLabel: "nights", nightLabel: "night", perNight: "/night",
    total: "Total", saveLabel: "You save", vsBooking: "vs official tariff",
    roomsNeeded: "Selected rooms",
    roomsCapacity: "Max capacity",
    availableLabel: "Available",
    notAvailable: "Not available",
    pickAtLeastOneRoom: "Select at least one room to continue.",
    guestDetails: "Tell us about you",
    guestHelper: "So we can confirm your booking.",
    namePlaceholder: "Full name", emailPlaceholder: "Email", phonePlaceholder: "Phone",
    notesPlaceholder: "Anything else? (optional)",
    adults: "Adults", childrenLabel: "Children",
    extrasTitle: "Need anything extra?",
    extraPet: "Bringing a pet", extraCrib: "Crib in the room",
    extraParking: "Parking", extraLateCheckIn: "Late check-in (after 10pm)",
    extraDietary: "Dietary needs (breakfast)",
    dietaryPlaceholder: "e.g. gluten-free, vegan...",
    sendWhatsApp: "Send request on WhatsApp",
    sendingLabel: "One moment...",
    sentTitle: "Request sent! 🎉",
    sentHelper: "We'll reply on WhatsApp within minutes to confirm availability.",
    sentWaiting: "Reply coming within minutes",
    newBooking: "New booking",
    benefits: ["Direct 10% discount on official tariff", "Flexible cancellation", "Talk directly with us", "Fast WhatsApp confirmation"],
    roomLabels: { single: "Single", double: "Double", triple: "Triple", quad: "Quadruple" } as Record<RoomType, string>,
    roomGuests: { single: "1 person", double: "2 people", triple: "3 people", quad: "4 people" } as Record<RoomType, string>,
    callUs: "Prefer to call?",
    error: "Something went wrong. Try again or call us.",
    summaryLabel: "Summary",
  }, [language])

  const formatMoney = useCallback((value: number) => {
    const hasCents = Math.round(value * 100) % 100 !== 0
    return new Intl.NumberFormat(language === "it" ? "it-IT" : "en-US", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: hasCents ? 2 : 0,
      maximumFractionDigits: 2,
    }).format(value)
  }, [language])

  // ─── Data loading ────────────────────────────────────────
  useEffect(() => {
    (async () => {
      setCalendarLoading(true)
      try {
        const res = await fetch("/api/booking/availability")
        if (res.ok) { const d = await res.json(); setBlockedDates(d.blockedDates || {}); setPrices(d.prices || []) }
      } catch (e) { console.error("Load failed:", e) }
      finally { setCalendarLoading(false) }
    })()
  }, [])

  const checkAllRoomsAvailability = useCallback(async () => {
    if (!dateRange?.from || !dateRange?.to) return

    const checkIn = formatDate(dateRange.from)
    const checkOut = formatDate(dateRange.to)
    setRoomCheckLoading(true)

    try {
      const pairs = await Promise.all(
        ROOM_TYPES.map(async (roomType) => {
          const res = await fetch(
            `/api/booking/availability?roomType=${roomType}&checkIn=${checkIn}&checkOut=${checkOut}`,
          )
          if (!res.ok) return [roomType, null] as const
          const data = (await res.json()) as AvailabilityData
          return [roomType, data] as const
        }),
      )

      const nextMap: Partial<Record<RoomType, AvailabilityData>> = {}
      for (const [roomType, data] of pairs) {
        if (data) nextMap[roomType] = data
      }
      setAvailabilityByRoom(nextMap)

      setRoomSelections((prev) => {
        const next = { ...prev }
        let changed = false
        for (const roomType of ROOM_TYPES) {
          const info = nextMap[roomType]
          const maxForType = info?.available ? Math.max(0, info.roomsAvailable) : 0
          const clamped = Math.min(prev[roomType], maxForType)
          if (clamped !== prev[roomType]) {
            next[roomType] = clamped
            changed = true
          }
        }
        return changed ? next : prev
      })
    } catch (e) {
      console.error("Check failed:", e)
      setAvailabilityByRoom({})
    } finally {
      setRoomCheckLoading(false)
    }
  }, [dateRange])

  useEffect(() => {
    if (step === 2 && dateRange?.from && dateRange?.to) checkAllRoomsAvailability()
  }, [step, dateRange, checkAllRoomsAvailability])

  const selectedNights = useMemo(() => {
    if (!dateRange?.from || !dateRange?.to) return 0
    return Math.round((dateRange.to.getTime() - dateRange.from.getTime()) / 864e5)
  }, [dateRange])

  const selectedRoomTypes = useMemo(
    () => ROOM_TYPES.filter((roomType) => roomSelections[roomType] > 0),
    [roomSelections],
  )

  const totalSelectedRooms = useMemo(
    () => selectedRoomTypes.reduce((total, roomType) => total + roomSelections[roomType], 0),
    [selectedRoomTypes, roomSelections],
  )

  const selectedCapacity = useMemo(
    () =>
      selectedRoomTypes.reduce(
        (total, roomType) => total + roomSelections[roomType] * ROOM_CAPACITY[roomType],
        0,
      ),
    [selectedRoomTypes, roomSelections],
  )

  const selectedRoomLines = useMemo(
    () =>
      selectedRoomTypes.map((roomType) => {
        const quantity = roomSelections[roomType]
        const availability = availabilityByRoom[roomType]
        return {
          roomType,
          quantity,
          availability,
          totalDirect: availability ? availability.totalPrice * quantity : null,
          totalOfficial: availability ? availability.bookingTotalPrice * quantity : null,
          savings: availability ? availability.savings * quantity : null,
        }
      }),
    [selectedRoomTypes, roomSelections, availabilityByRoom],
  )

  const pricingTotals = useMemo(() => {
    let totalDirect = 0
    let totalOfficial = 0
    let totalSavings = 0
    let complete = true

    for (const line of selectedRoomLines) {
      if (line.totalDirect === null || line.totalOfficial === null || line.savings === null) {
        complete = false
        continue
      }
      totalDirect += line.totalDirect
      totalOfficial += line.totalOfficial
      totalSavings += line.savings
    }

    return { totalDirect, totalOfficial, totalSavings, complete }
  }, [selectedRoomLines])

  const hasSelectionConflict = useMemo(
    () =>
      selectedRoomTypes.some((roomType) => {
        const info = availabilityByRoom[roomType]
        if (!info || !info.available) return true
        return roomSelections[roomType] > info.roomsAvailable
      }),
    [selectedRoomTypes, availabilityByRoom, roomSelections],
  )

  // ─── WhatsApp ─────────────────────────────────────────────
  const handleSendWhatsApp = () => {
    if (!dateRange?.from || !dateRange?.to) return
    setStatus("sending")
    const ci = formatDateDisplay(formatDate(dateRange.from), language)
    const co = formatDateDisplay(formatDate(dateRange.to), language)
    const n = selectedNights
    const nw = n === 1 ? copy.nightLabel : copy.nightsLabel
    const price = pricingTotals.complete ? formatMoney(pricingTotals.totalDirect) : "---"
    const pn = pricingTotals.complete && n > 0 ? formatMoney(pricingTotals.totalDirect / n) : "---"
    const savings = pricingTotals.complete ? formatMoney(pricingTotals.totalSavings) : "---"

    const extrasLines: string[] = []
    if (extras.pet) extrasLines.push(language === "it" ? "Animale domestico" : "Pet")
    if (extras.crib) extrasLines.push(language === "it" ? "Culla in camera" : "Crib needed")
    if (extras.parking) extrasLines.push(language === "it" ? "Parcheggio" : "Parking")
    if (extras.lateCheckIn) extrasLines.push(language === "it" ? "Check-in tardivo" : "Late check-in")
    if (extras.dietaryNeeds.trim()) {
      extrasLines.push(
        language === "it"
          ? `Esigenze alimentari: ${extras.dietaryNeeds.trim()}`
          : `Dietary needs: ${extras.dietaryNeeds.trim()}`,
      )
    }

    const guestCount =
      language === "it"
        ? `${guest.adults} adulti${guest.children > 0 ? `, ${guest.children} bambini` : ""}`
        : `${guest.adults} adults${guest.children > 0 ? `, ${guest.children} children` : ""}`

    const notes = guest.notes.trim()
    const roomLines = selectedRoomLines.map((line) => {
      const unitPrice = line.availability ? formatMoney(line.availability.pricePerNight) : null
      return unitPrice
        ? `${copy.roomLabels[line.roomType]} x ${line.quantity} (${unitPrice}${copy.perNight})`
        : `${copy.roomLabels[line.roomType]} x ${line.quantity}`
    })

    const msg = language === "it"
      ? [
        "*Richiesta prenotazione*",
        "",
        "Contatti",
        `- Nome: ${guest.name}`,
        `- Email: ${guest.email}`,
        `- Telefono: ${guest.phone}`,
        "",
        "Soggiorno",
        `- Camere selezionate: ${totalSelectedRooms}`,
        ...roomLines.map((line) => `- ${line}`),
        `- Date: ${ci} -> ${co}`,
        `- Durata: ${n} ${nw}`,
        `- Ospiti: ${guestCount}`,
        "",
        "Prezzo stimato",
        `- Totale: ${price}`,
        `- Media a notte (tutte le camere): ${pn}`,
        ...(pricingTotals.complete && pricingTotals.totalSavings > 0 ? [`- Risparmio stimato: ${savings}`] : []),
        ...(extrasLines.length ? ["", "*Richieste extra*", ...extrasLines.map((line) => `- ${line}`)] : []),
        ...(notes ? ["", "*Note*", notes] : []),
        "",
        "Grazie, attendo conferma.",
      ].join("\n")
      : [
        "*Booking request*",
        "",
        "Contact",
        `- Name: ${guest.name}`,
        `- Email: ${guest.email}`,
        `- Phone: ${guest.phone}`,
        "",
        "Stay",
        `- Selected rooms: ${totalSelectedRooms}`,
        ...roomLines.map((line) => `- ${line}`),
        `- Dates: ${ci} -> ${co}`,
        `- Length: ${n} ${nw}`,
        `- Guests: ${guestCount}`,
        "",
        "Estimated price",
        `- Total: ${price}`,
        `- Average per night (all rooms): ${pn}`,
        ...(pricingTotals.complete && pricingTotals.totalSavings > 0 ? [`- Estimated savings: ${savings}`] : []),
        ...(extrasLines.length ? ["", "*Extra requests*", ...extrasLines.map((line) => `- ${line}`)] : []),
        ...(notes ? ["", "*Notes*", notes] : []),
        "",
        "Thank you. Waiting for confirmation.",
      ].join("\n")

    setTimeout(() => {
      window.open(`https://wa.me/393929309201?text=${encodeURIComponent(msg)}`, "_blank")
      setStatus("sent"); setStep(4)
    }, 400)
  }

  // ─── Navigation ──────────────────────────────────────────
  const canGoStep2 = dateRange?.from && dateRange?.to
  const canGoStep3 =
    !!dateRange?.from &&
    !!dateRange?.to &&
    totalSelectedRooms > 0 &&
    !roomCheckLoading &&
    !hasSelectionConflict
  const canGoStep4 = guest.name && guest.email && guest.phone

  const goNext = () => {
    if (step === 1 && canGoStep2) setStep(2)
    else if (step === 2 && canGoStep3) setStep(3)
    else if (step === 3 && canGoStep4) handleSendWhatsApp()
  }
  const goBack = () => { if (step === 2) setStep(1); else if (step === 3) setStep(2) }

  const resetForm = () => {
    setStep(1); setStatus("idle"); setDateRange(undefined)
    setRoomSelections({ single: 0, double: 1, triple: 0, quad: 0 })
    setAvailabilityByRoom({})
    setGuest({ name: "", email: "", phone: "", notes: "", adults: 2, children: 0 })
    setExtras({ pet: false, crib: false, parking: false, lateCheckIn: false, dietaryNeeds: "" })
  }

  const disabledDays = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const rt of ROOM_TYPES) for (const d of (blockedDates[rt] || [])) counts[d] = (counts[d] || 0) + 1
    const blocked = Object.entries(counts).filter(([, c]) => c >= ROOM_TYPES.length).map(([d]) => new Date(d + "T12:00:00"))
    return [{ before: new Date() }, ...blocked]
  }, [blockedDates])

  const steps = [copy.step1, copy.step2, copy.step3, copy.step4]
  const getRoomPrice = (rt: RoomType) => prices.find((p) => p.type === rt)

  // ─── Toggle helper ───────────────────────────────────────
  const ExtraToggle = ({ checked, onChange, icon: Icon, label }: { checked: boolean; onChange: (v: boolean) => void; icon: React.ComponentType<{ className?: string }>; label: string }) => (
    <button type="button" onClick={() => onChange(!checked)} className="flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition-all w-full"
      style={{ backgroundColor: checked ? "var(--accent-50)" : "var(--neutral-50)", border: checked ? "1.5px solid var(--accent-400)" : "1px solid var(--neutral-150)", color: checked ? "var(--accent-800)" : "var(--neutral-700)" }}>
      <Icon className="h-4 w-4 shrink-0" />
      <span className="flex-1 font-medium">{label}</span>
      {checked && <Check className="h-4 w-4 shrink-0" style={{ color: "var(--accent-600)" }} />}
    </button>
  )

  return (
    <section id="prenota" className="section-shell overflow-hidden" style={{ backgroundColor: "var(--primary-900)" }}>
      <div className="container-shell">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.2 }} className="mx-auto max-w-3xl text-center">
          <span className="eyebrow-light"><CalendarCheck2 className="h-3.5 w-3.5" />{copy.eyebrow}</span>
          <h2 className="section-title" style={{ color: "#fff" }}>{copy.title}</h2>
          <p className="section-subtitle mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>{copy.subtitle}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }} viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-[1.4fr_1fr]">

          {/* ── Main Card ── */}
          <div className="surface-card overflow-hidden p-5 sm:p-7">
            {/* Steps */}
            <div className="mb-6 flex items-center gap-1.5">
              {steps.map((label, i) => {
                const sn = (i + 1) as BookingStep; const active = step === sn; const done = step > sn || status === "sent"
                return (<div key={label} className="flex flex-1 items-center gap-1.5">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors"
                    style={{ backgroundColor: done || active ? "var(--accent-400)" : "var(--neutral-200)", color: done || active ? "var(--neutral-950)" : "var(--neutral-500)" }}>
                    {done ? <Check className="h-3.5 w-3.5" /> : sn}
                  </div>
                  <span className="hidden text-xs font-medium sm:inline" style={{ color: done || active ? "var(--neutral-900)" : "var(--neutral-400)" }}>{label}</span>
                  {i < steps.length - 1 && <div className="h-px flex-1" style={{ backgroundColor: step > sn ? "var(--accent-400)" : "var(--neutral-200)" }} />}
                </div>)
              })}
            </div>

            <AnimatePresence mode="wait">
              {/* ─── STEP 1: Calendar ─── */}
              {step === 1 && (
                <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                  <h3 className="text-lg font-semibold" style={{ color: "var(--neutral-900)" }}>{copy.selectDates}</h3>
                  <p className="mt-1 text-sm" style={{ color: "var(--neutral-500)" }}>{copy.selectDatesHelper}</p>
                  <div className="mt-5 flex justify-center overflow-x-auto">
                    {calendarLoading ? (
                      <div className="flex h-72 items-center justify-center"><Loader2 className="h-6 w-6 animate-spin" style={{ color: "var(--accent-500)" }} /></div>
                    ) : (
                      <DayPicker mode="range" selected={dateRange} onSelect={setDateRange} disabled={disabledDays}
                        numberOfMonths={typeof window !== "undefined" && window.innerWidth >= 640 ? 2 : 1}
                        fromMonth={new Date()} toYear={new Date().getFullYear() + 1}
                        modifiersStyles={{
                          selected: { backgroundColor: "var(--accent-500)", color: "#fff" },
                          range_middle: { backgroundColor: "var(--accent-100)", color: "var(--accent-900)" },
                          disabled: { textDecoration: "line-through", color: "var(--neutral-300)" },
                        }}
                        styles={{ caption: { color: "var(--neutral-900)" }, head_cell: { color: "var(--neutral-500)", fontSize: "0.75rem" }, day: { fontSize: "0.875rem" } }}
                        className="booking-calendar"
                      />
                    )}
                  </div>
                  {dateRange?.from && dateRange?.to && (
                    <div className="mt-4 flex items-center justify-between rounded-xl px-4 py-3" style={{ backgroundColor: "var(--accent-50)", border: "1px solid var(--accent-200)" }}>
                      <div className="text-sm" style={{ color: "var(--accent-800)" }}>
                        <span className="font-semibold">{formatDateDisplay(formatDate(dateRange.from), language)}</span>{" → "}
                        <span className="font-semibold">{formatDateDisplay(formatDate(dateRange.to), language)}</span>
                      </div>
                      <span className="text-xs font-medium" style={{ color: "var(--accent-600)" }}>
                        {Math.round((dateRange.to.getTime() - dateRange.from.getTime()) / 864e5)}{" "}
                        {Math.round((dateRange.to.getTime() - dateRange.from.getTime()) / 864e5) === 1 ? copy.nightLabel : copy.nightsLabel}
                      </span>
                    </div>
                  )}
                  <button onClick={goNext} disabled={!canGoStep2} className="cta-pill-accent mt-6 w-full justify-center disabled:opacity-40 disabled:cursor-not-allowed">
                    {copy.next}<ChevronRight className="h-4 w-4" />
                  </button>
                </motion.div>
              )}

              {/* ─── STEP 2: Room ─── */}
              {step === 2 && (
                <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                  <button onClick={goBack} className="mb-3 flex items-center gap-1 text-sm font-medium" style={{ color: "var(--neutral-500)" }}><ChevronLeft className="h-3.5 w-3.5" />{copy.back}</button>
                  <h3 className="text-lg font-semibold" style={{ color: "var(--neutral-900)" }}>{copy.chooseRoom}</h3>
                  <p className="mt-1 text-sm" style={{ color: "var(--neutral-500)" }}>{copy.chooseRoomHelper}</p>

                  <div className="mt-5 space-y-3">
                    {ROOM_TYPES.map((rt) => {
                      const pi = getRoomPrice(rt)
                      const selectedCount = roomSelections[rt]
                      const isSelected = selectedCount > 0
                      const info = availabilityByRoom[rt]
                      const availableNow = info?.available ?? false
                      const maxForType = availableNow ? Math.max(0, info?.roomsAvailable ?? 0) : 0
                      const canIncrease = !roomCheckLoading && availableNow && selectedCount < maxForType
                      const canDecrease = !roomCheckLoading && selectedCount > 0
                      const directRate = info?.pricePerNight ?? pi?.pricePerNight ?? 0
                      const officialRate = info?.bookingPricePerNight ?? pi?.bookingPrice ?? 0

                      return (
                        <div
                          key={rt}
                          className="w-full rounded-xl p-4 transition-all"
                          style={{
                            backgroundColor: isSelected ? "var(--primary-900)" : "var(--neutral-0)",
                            border: isSelected ? "1px solid var(--primary-800)" : "1px solid var(--neutral-150)",
                            boxShadow: isSelected ? "var(--shadow-md)" : "none",
                          }}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="text-base font-semibold" style={{ color: isSelected ? "#fff" : "var(--neutral-900)" }}>
                                {copy.roomLabels[rt]}
                              </p>
                              <p className="mt-1 inline-flex items-center gap-1.5 text-xs" style={{ color: isSelected ? "rgba(255,255,255,0.7)" : "var(--neutral-500)" }}>
                                <Users className="h-3.5 w-3.5" />{copy.roomGuests[rt]}
                              </p>
                            </div>
                            <div className="text-right">
                              {directRate > 0 && (
                                <>
                                  <span className="text-sm font-bold" style={{ color: isSelected ? "var(--accent-300)" : "var(--accent-600)" }}>
                                    {formatMoney(directRate)}
                                    <span className="text-xs font-normal">{copy.perNight}</span>
                                  </span>
                                  <p className="mt-0.5 text-xs" style={{ color: "var(--neutral-400)" }}>
                                    <span style={{ textDecoration: "line-through" }}>{formatMoney(officialRate)}</span> {copy.vsBooking}
                                  </p>
                                </>
                              )}
                            </div>
                          </div>

                          <div className="mt-3 flex items-center justify-between gap-3">
                            <p className="text-xs font-medium" style={{ color: isSelected ? "rgba(255,255,255,0.7)" : "var(--neutral-500)" }}>
                              {availableNow ? `${copy.availableLabel}: ${maxForType}` : copy.notAvailable}
                            </p>
                            <div className="flex items-center gap-3">
                              <button
                                type="button"
                                onClick={() => setRoomSelections((prev) => ({ ...prev, [rt]: Math.max(0, prev[rt] - 1) }))}
                                disabled={!canDecrease}
                                className="flex h-8 w-8 items-center justify-center rounded-lg disabled:opacity-40 disabled:cursor-not-allowed"
                                style={{ border: "1px solid var(--neutral-200)", color: isSelected ? "#fff" : "var(--neutral-800)" }}
                              >
                                <Minus className="h-3.5 w-3.5" />
                              </button>
                              <span className="w-5 text-center text-sm font-bold" style={{ color: isSelected ? "#fff" : "var(--neutral-900)" }}>
                                {selectedCount}
                              </span>
                              <button
                                type="button"
                                onClick={() =>
                                  setRoomSelections((prev) => ({
                                    ...prev,
                                    [rt]: Math.min(maxForType, prev[rt] + 1),
                                  }))
                                }
                                disabled={!canIncrease}
                                className="flex h-8 w-8 items-center justify-center rounded-lg disabled:opacity-40 disabled:cursor-not-allowed"
                                style={{ border: "1px solid var(--neutral-200)", color: isSelected ? "#fff" : "var(--neutral-800)" }}
                              >
                                <Plus className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          </div>

                          {isSelected && (pi?.savings ?? 0) > 0 && (
                            <div className="mt-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold" style={{ backgroundColor: "rgba(255,255,255,0.16)", color: "var(--accent-200)" }}>
                              <BadgePercent className="h-3 w-3" />{copy.saveLabel} {formatMoney((pi?.savings ?? 0) * selectedCount)}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>

                  {/* Room mix summary */}
                  <div className="mt-5 flex items-center justify-between rounded-xl px-4 py-3" style={{ backgroundColor: "var(--neutral-50)", border: "1px solid var(--neutral-150)" }}>
                    <div className="space-y-1">
                      <p className="text-sm font-medium" style={{ color: "var(--neutral-700)" }}>
                        {copy.roomsNeeded}: <span className="font-bold">{totalSelectedRooms}</span>
                      </p>
                      <p className="text-xs" style={{ color: "var(--neutral-500)" }}>
                        {copy.roomsCapacity}: {selectedCapacity}
                      </p>
                    </div>
                    {totalSelectedRooms === 0 && (
                      <p className="text-xs font-medium text-right" style={{ color: "var(--neutral-500)" }}>
                        {copy.pickAtLeastOneRoom}
                      </p>
                    )}
                  </div>

                  {roomCheckLoading && <div className="mt-4 flex items-center gap-2 text-sm" style={{ color: "var(--neutral-500)" }}><Loader2 className="h-4 w-4 animate-spin" />{copy.checking}</div>}

                  {totalSelectedRooms > 0 && (
                    <div className="mt-4 rounded-xl p-4" style={{ backgroundColor: "var(--neutral-50)", border: "1px solid var(--neutral-150)" }}>
                      <p className="mb-2 text-xs font-medium" style={{ color: "var(--neutral-500)" }}>{copy.priceEstimate}</p>
                      <div className="space-y-1.5">
                        {selectedRoomLines.map((line) => (
                          <div key={line.roomType} className="flex items-center justify-between text-xs" style={{ color: "var(--neutral-600)" }}>
                            <span>{copy.roomLabels[line.roomType]} x {line.quantity}</span>
                            <span>{line.totalDirect !== null ? formatMoney(line.totalDirect) : "..."}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-end justify-between">
                        <p className="text-sm" style={{ color: "var(--neutral-700)" }}>
                          {selectedNights} {selectedNights === 1 ? copy.nightLabel : copy.nightsLabel}
                        </p>
                        <div className="text-right">
                          <p className="text-lg font-bold" style={{ color: "var(--accent-700)" }}>
                            {pricingTotals.complete ? formatMoney(pricingTotals.totalDirect) : "..."}
                          </p>
                          {pricingTotals.complete && (
                            <p className="text-xs" style={{ color: "var(--neutral-500)" }}>
                              <span style={{ textDecoration: "line-through" }}>{formatMoney(pricingTotals.totalOfficial)}</span> {copy.vsBooking}
                            </p>
                          )}
                        </div>
                      </div>
                      {pricingTotals.complete && pricingTotals.totalSavings > 0 && (
                        <div className="mt-2 flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold" style={{ backgroundColor: "var(--accent-50)", color: "var(--accent-700)" }}>
                          <Sparkles className="h-3.5 w-3.5" />{copy.saveLabel} {formatMoney(pricingTotals.totalSavings)}!
                        </div>
                      )}
                    </div>
                  )}

                  <button onClick={goNext} disabled={!canGoStep3} className="cta-pill-accent mt-6 w-full justify-center disabled:opacity-40 disabled:cursor-not-allowed">
                    {copy.next}<ChevronRight className="h-4 w-4" />
                  </button>
                </motion.div>
              )}

              {/* ─── STEP 3: Guest + Extras ─── */}
              {step === 3 && (
                <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                  <button onClick={goBack} className="mb-3 flex items-center gap-1 text-sm font-medium" style={{ color: "var(--neutral-500)" }}><ChevronLeft className="h-3.5 w-3.5" />{copy.back}</button>
                  <h3 className="text-lg font-semibold" style={{ color: "var(--neutral-900)" }}>{copy.guestDetails}</h3>
                  <p className="mt-1 text-sm" style={{ color: "var(--neutral-500)" }}>{copy.guestHelper}</p>

                  <div className="mt-5 space-y-4">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium" style={{ color: "var(--neutral-700)" }}><User className="mr-1.5 inline h-3.5 w-3.5" />{copy.namePlaceholder} *</label>
                      <input type="text" value={guest.name} onChange={(e) => setGuest(g => ({ ...g, name: e.target.value }))} placeholder={copy.namePlaceholder} className="input-field" required />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-sm font-medium" style={{ color: "var(--neutral-700)" }}><Mail className="mr-1.5 inline h-3.5 w-3.5" />{copy.emailPlaceholder} *</label>
                        <input type="email" value={guest.email} onChange={(e) => setGuest(g => ({ ...g, email: e.target.value }))} placeholder={copy.emailPlaceholder} className="input-field" required />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-medium" style={{ color: "var(--neutral-700)" }}><Phone className="mr-1.5 inline h-3.5 w-3.5" />{copy.phonePlaceholder} *</label>
                        <input type="tel" value={guest.phone} onChange={(e) => setGuest(g => ({ ...g, phone: e.target.value }))} placeholder={copy.phonePlaceholder} className="input-field" required />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-sm font-medium" style={{ color: "var(--neutral-700)" }}>{copy.adults}</label>
                        <select value={guest.adults} onChange={(e) => setGuest(g => ({ ...g, adults: Number(e.target.value) }))} className="input-field">
                          {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-medium" style={{ color: "var(--neutral-700)" }}>{copy.childrenLabel}</label>
                        <select value={guest.children} onChange={(e) => setGuest(g => ({ ...g, children: Number(e.target.value) }))} className="input-field">
                          {[0, 1, 2, 3, 4].map(n => <option key={n} value={n}>{n}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Extras */}
                  <div className="mt-6">
                    <p className="text-sm font-semibold" style={{ color: "var(--neutral-800)" }}>{copy.extrasTitle}</p>
                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      <ExtraToggle checked={extras.pet} onChange={(v) => setExtras(e => ({ ...e, pet: v }))} icon={Dog} label={copy.extraPet} />
                      <ExtraToggle checked={extras.crib} onChange={(v) => setExtras(e => ({ ...e, crib: v }))} icon={Baby} label={copy.extraCrib} />
                      <ExtraToggle checked={extras.parking} onChange={(v) => setExtras(e => ({ ...e, parking: v }))} icon={Car} label={copy.extraParking} />
                      <ExtraToggle checked={extras.lateCheckIn} onChange={(v) => setExtras(e => ({ ...e, lateCheckIn: v }))} icon={Moon} label={copy.extraLateCheckIn} />
                    </div>
                    <div className="mt-3">
                      <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium" style={{ color: "var(--neutral-700)" }}><UtensilsCrossed className="h-3.5 w-3.5" />{copy.extraDietary}</label>
                      <input type="text" value={extras.dietaryNeeds} onChange={(e) => setExtras(ex => ({ ...ex, dietaryNeeds: e.target.value }))} placeholder={copy.dietaryPlaceholder} className="input-field" />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="mb-1.5 block text-sm font-medium" style={{ color: "var(--neutral-700)" }}>{copy.notesPlaceholder}</label>
                    <textarea value={guest.notes} onChange={(e) => setGuest(g => ({ ...g, notes: e.target.value }))} placeholder={copy.notesPlaceholder} rows={2} className="input-field" />
                  </div>

                  {/* Summary */}
                  {selectedRoomLines.length > 0 && (
                    <div className="mt-5 rounded-xl p-4" style={{ backgroundColor: "var(--neutral-50)", border: "1px solid var(--neutral-150)" }}>
                      <p className="text-xs font-semibold uppercase" style={{ letterSpacing: "0.08em", color: "var(--neutral-400)" }}>{copy.summaryLabel}</p>
                      <div className="mt-2 space-y-1 text-sm" style={{ color: "var(--neutral-700)" }}>
                        {selectedRoomLines.map((line) => (
                          <p key={line.roomType}>
                            <span className="font-medium">{copy.roomLabels[line.roomType]}</span> × {line.quantity}
                          </p>
                        ))}
                        {dateRange?.from && dateRange?.to && <p>{formatDateDisplay(formatDate(dateRange.from), language)} → {formatDateDisplay(formatDate(dateRange.to), language)}</p>}
                        <p>{selectedNights} {selectedNights === 1 ? copy.nightLabel : copy.nightsLabel}</p>
                      </div>
                      <div className="mt-3 flex items-end justify-between border-t pt-3" style={{ borderColor: "var(--neutral-200)" }}>
                        <span className="text-sm font-medium" style={{ color: "var(--neutral-600)" }}>{copy.total}</span>
                        <span className="text-xl font-bold" style={{ color: "var(--accent-700)" }}>
                          {pricingTotals.complete ? formatMoney(pricingTotals.totalDirect) : "..."}
                        </span>
                      </div>
                    </div>
                  )}

                  <button onClick={goNext} disabled={!canGoStep4 || status === "sending"}
                    className="cta-pill-accent mt-6 w-full justify-center disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{ backgroundColor: "#25D366", boxShadow: "0 8px 32px -8px rgba(37,211,102,0.4)" }}>
                    {status === "sending" ? <><Loader2 className="h-4 w-4 animate-spin" />{copy.sendingLabel}</> : <><MessageCircle className="h-4 w-4" />{copy.sendWhatsApp}</>}
                  </button>
                </motion.div>
              )}

              {/* ─── STEP 4: Sent ─── */}
              {step === 4 && (
                <motion.div key="s4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full" style={{ backgroundColor: "var(--accent-100)" }}>
                      <PartyPopper className="h-8 w-8" style={{ color: "var(--accent-600)" }} />
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: "var(--neutral-900)" }}>{copy.sentTitle}</h3>
                    <p className="mt-2 text-sm" style={{ color: "var(--neutral-500)" }}>{copy.sentHelper}</p>
                    <div className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium" style={{ backgroundColor: "var(--accent-50)", color: "var(--accent-700)", border: "1px solid var(--accent-200)" }}>
                      <Clock className="h-4 w-4 animate-pulse" />{copy.sentWaiting}
                    </div>
                    {selectedRoomLines.length > 0 && dateRange?.from && dateRange?.to && (
                      <div className="mt-6 rounded-xl p-5 text-left" style={{ backgroundColor: "var(--neutral-50)", border: "1px solid var(--neutral-150)" }}>
                        <div className="space-y-2 text-sm" style={{ color: "var(--neutral-700)" }}>
                          {selectedRoomLines.map((line) => (
                            <p key={line.roomType}>
                              <span className="font-medium">{copy.roomLabels[line.roomType]}</span> × {line.quantity}
                            </p>
                          ))}
                          <p>{formatDateDisplay(formatDate(dateRange.from), language)} → {formatDateDisplay(formatDate(dateRange.to), language)}</p>
                          <p>
                            {selectedNights} {selectedNights === 1 ? copy.nightLabel : copy.nightsLabel} ·{" "}
                            <span className="font-bold" style={{ color: "var(--accent-700)" }}>
                              {pricingTotals.complete ? formatMoney(pricingTotals.totalDirect) : "..."}
                            </span>
                          </p>
                          <p><span className="font-medium">{guest.name}</span> · {guest.email}</p>
                        </div>
                      </div>
                    )}
                    <button onClick={resetForm} className="cta-pill-outline mt-6 w-full justify-center">{copy.newBooking}</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Sidebar ── */}
          <div className="space-y-5">
            <div className="rounded-2xl p-5 sm:p-6" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5" style={{ color: "var(--accent-400)" }} />
                <h3 className="text-base font-semibold text-white">{t("booking.directBenefits")}</h3>
              </div>
              <div className="mt-5 space-y-3">
                {copy.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: "var(--accent-100)", color: "var(--accent-700)" }}><Check className="h-3 w-3" /></span>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>{b}</p>
                  </div>
                ))}
              </div>
            </div>
            {prices.length > 0 && (
              <div className="rounded-2xl p-5 sm:p-6" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div className="flex items-center gap-3"><BadgePercent className="h-5 w-5" style={{ color: "var(--accent-400)" }} /><h3 className="text-base font-semibold text-white">{language === "it" ? "I nostri prezzi" : "Our prices"}</h3></div>
                <div className="mt-4 space-y-2">
                  {prices.map((p) => (
                    <div key={p.type} className="flex items-center justify-between text-sm">
                      <span style={{ color: "rgba(255,255,255,0.7)" }}>{copy.roomLabels[p.type]}</span>
                      <div className="flex items-center gap-2">
                        <span style={{ color: "var(--neutral-400)", textDecoration: "line-through", fontSize: "0.75rem" }}>{formatMoney(p.bookingPrice)}</span>
                        <span className="font-bold" style={{ color: "var(--accent-300)" }}>{formatMoney(p.pricePerNight)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="rounded-2xl p-5 sm:p-6 text-center" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.8)" }}>{copy.callUs}</p>
              <a href="tel:+390921820683" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--accent-300)" }}><Phone className="h-4 w-4" />0921 820683</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
