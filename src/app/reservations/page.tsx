"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, Users, CheckCircle, Phone } from "lucide-react"
import Link from "next/link"

export default function ReservationsPage() {
  const [reservationMade, setReservationMade] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
    requests: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate reservation booking
    setReservationMade(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  // Generate available time slots
  const timeSlots = [
    "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"
  ]

  if (reservationMade) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 flex items-center justify-center">
        <Card className="bg-zinc-800/50 border-zinc-700 max-w-md mx-4">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-white text-2xl">Reservation Confirmed!</CardTitle>
            <CardDescription className="text-zinc-400">
              Your table has been reserved at Sakura BTC. We'll send you a confirmation shortly.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="bg-zinc-700/50 rounded-lg p-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Date & Time:</span>
                <span className="text-white">{formData.date} at {formData.time}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Guests:</span>
                <span className="text-white">{formData.guests} people</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Name:</span>
                <span className="text-white">{formData.name}</span>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-2 text-zinc-300">
              <Phone className="w-4 h-4" />
              <span className="text-sm">We'll call you at {formData.phone} to confirm</span>
            </div>

            <div className="space-y-2">
              <Link href="/menu">
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  View Menu
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="w-full border-zinc-600 text-zinc-300 hover:bg-zinc-800">
                  Back to Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Nazaj</span>
            </Link>
            <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">桜</span>
            </div>
            <h1 className="text-2xl font-bold text-white">Rezervacija miz</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <Badge variant="outline" className="border-red-500 text-red-400 mb-4">
            Reserve Your Table
          </Badge>
          <h2 className="text-3xl font-bold text-white mb-4">
            Book Your Experience at Sakura BTC
          </h2>
          <p className="text-zinc-400 max-w-lg mx-auto">
            Reserve a table in our authentic Japanese bistro and enjoy a memorable dining experience in the heart of Ljubljana.
          </p>
        </div>

        <Card className="bg-zinc-800/50 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Make a Reservation</CardTitle>
            <CardDescription className="text-zinc-400">
              Choose your preferred date, time, and party size
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="+386 XX XXX XXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Reservation Details */}
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Time *
                  </label>
                  <select
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">
                    <Users className="w-4 h-4 inline mr-2" />
                    Guests *
                  </label>
                  <select
                    name="guests"
                    required
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    {[1,2,3,4,5,6,7,8].map((num) => (
                      <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Special Requests
                </label>
                <textarea
                  name="requests"
                  rows={3}
                  value={formData.requests}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Any dietary restrictions, celebrations, or special seating requests..."
                />
              </div>

              <div className="border-t border-zinc-700 pt-6">
                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 text-lg"
                >
                  Reserve Table
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Restaurant Info */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Card className="bg-zinc-800/30 border-zinc-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Clock className="w-5 h-5 mr-2 text-red-400" />
                Opening Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-zinc-300">
                <div className="flex justify-between">
                  <span>Monday - Thursday</span>
                  <span>11:00 - 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday - Saturday</span>
                  <span>11:00 - 23:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>12:00 - 21:00</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-800/30 border-zinc-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Phone className="w-5 h-5 mr-2 text-red-400" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-zinc-300">
                <p>📞 +386 1 234 5678</p>
                <p>📧 info@sakurabtc.si</p>
                <p>📍 Ljubljana, Slovenia</p>
                <p className="text-sm text-zinc-400 mt-3">
                  For large groups (8+ people) or special events, please call us directly.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
