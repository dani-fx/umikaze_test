"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Phone, MapPin, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function CheckoutPage() {
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    notes: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate order placement
    setOrderPlaced(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 flex items-center justify-center">
        <Card className="bg-zinc-800/50 border-zinc-700 max-w-md mx-4">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-white text-2xl">Order Confirmed!</CardTitle>
            <CardDescription className="text-zinc-400">
              Thank you for choosing Sakura BTC! We'll call you shortly to confirm your order details.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-center space-x-2 text-zinc-300">
                <Clock className="w-4 h-4" />
                <span>Estimated delivery: 30-45 minutes</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-zinc-300">
                <Phone className="w-4 h-4" />
                <span>We'll call you at {formData.phone}</span>
              </div>
            </div>
            <Link href="/menu">
              <Button className="w-full bg-red-600 hover:bg-red-700">
                Order More
              </Button>
            </Link>
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
            <Link href="/menu" className="flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Menu</span>
            </Link>
            <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">桜</span>
            </div>
            <h1 className="text-2xl font-bold text-white">Sakura BTC Checkout</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card className="bg-zinc-800/50 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Complete Your Order</CardTitle>
            <CardDescription className="text-zinc-400">
              Please provide your contact information for delivery
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
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

              <div>
                <label className="block text-white font-medium mb-2">
                  Delivery Address *
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Street address, Ljubljana"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Special Instructions
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Any special requests or delivery instructions..."
                />
              </div>

              <div className="border-t border-zinc-700 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-white font-medium">Order Total:</span>
                  <span className="text-red-400 font-bold text-xl">€45.80</span>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 text-lg"
                >
                  Place Order
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Restaurant Info */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <Card className="bg-zinc-800/30 border-zinc-700">
            <CardContent className="p-4 text-center">
              <Clock className="w-6 h-6 text-red-400 mx-auto mb-2" />
              <p className="text-white font-medium">Delivery Time</p>
              <p className="text-zinc-400 text-sm">30-45 minutes</p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-800/30 border-zinc-700">
            <CardContent className="p-4 text-center">
              <Phone className="w-6 h-6 text-red-400 mx-auto mb-2" />
              <p className="text-white font-medium">Contact</p>
              <p className="text-zinc-400 text-sm">+386 1 234 5678</p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-800/30 border-zinc-700">
            <CardContent className="p-4 text-center">
              <MapPin className="w-6 h-6 text-red-400 mx-auto mb-2" />
              <p className="text-white font-medium">Delivery Area</p>
              <p className="text-zinc-400 text-sm">Ljubljana & surroundings</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
