"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Star, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  spicy?: boolean
  vegetarian?: boolean
  popular?: boolean
}

const menuItems: MenuItem[] = [
  // Sushi & Sashimi
  {
    id: 1,
    name: "Salmon Nigiri",
    description: "Fresh Norwegian salmon over seasoned sushi rice",
    price: 3.50,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&h=400&fit=crop&crop=center",
    category: "sushi",
    popular: true
  },
  {
    id: 2,
    name: "Tuna Sashimi",
    description: "Premium bluefin tuna, thinly sliced",
    price: 8.90,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center",
    category: "sushi"
  },
  {
    id: 3,
    name: "Dragon Roll",
    description: "Eel, cucumber, avocado with eel sauce",
    price: 12.50,
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=600&h=400&fit=crop&crop=center",
    category: "sushi",
    popular: true
  },
  {
    id: 4,
    name: "Rainbow Roll",
    description: "California roll topped with assorted fish",
    price: 14.90,
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&h=400&fit=crop&crop=center",
    category: "sushi"
  },

  // Ramen & Noodles
  {
    id: 5,
    name: "Tonkotsu Ramen",
    description: "Rich pork bone broth with chashu, egg, and scallions",
    price: 13.90,
    image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=600&h=400&fit=crop&crop=center",
    category: "ramen",
    popular: true
  },
  {
    id: 6,
    name: "Spicy Miso Ramen",
    description: "Miso broth with ground pork and chili oil",
    price: 12.90,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&h=400&fit=crop&crop=center",
    category: "ramen",
    spicy: true
  },
  {
    id: 7,
    name: "Chicken Teriyaki Udon",
    description: "Thick udon noodles with teriyaki glazed chicken",
    price: 11.50,
    image: "https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?w=600&h=400&fit=crop&crop=center",
    category: "ramen"
  },

  // Appetizers
  {
    id: 8,
    name: "Gyoza (6 pieces)",
    description: "Pan-fried pork dumplings with dipping sauce",
    price: 7.50,
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&h=400&fit=crop&crop=center",
    category: "appetizers",
    popular: true
  },
  {
    id: 9,
    name: "Edamame",
    description: "Steamed young soybeans with sea salt",
    price: 4.90,
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop&crop=center",
    category: "appetizers",
    vegetarian: true
  },
  {
    id: 10,
    name: "Chicken Karaage",
    description: "Japanese fried chicken with spicy mayo",
    price: 8.90,
    image: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=600&h=400&fit=crop&crop=center",
    category: "appetizers"
  },
  {
    id: 11,
    name: "Tempura Vegetables",
    description: "Lightly battered and fried seasonal vegetables",
    price: 9.50,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop&crop=center",
    category: "appetizers",
    vegetarian: true
  },

  // Hot Dishes
  {
    id: 12,
    name: "Beef Teriyaki",
    description: "Grilled beef with teriyaki glaze, steamed rice",
    price: 16.90,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&h=400&fit=crop&crop=center",
    category: "hot",
    popular: true
  },
  {
    id: 13,
    name: "Chicken Katsu",
    description: "Breaded chicken cutlet with tonkatsu sauce",
    price: 14.50,
    image: "https://images.unsplash.com/photo-1607301405390-d831c242514d?w=600&h=400&fit=crop&crop=center",
    category: "hot"
  },
  {
    id: 14,
    name: "Salmon Teriyaki",
    description: "Grilled salmon with teriyaki sauce and vegetables",
    price: 17.50,
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop&crop=center",
    category: "hot"
  },

  // Desserts
  {
    id: 15,
    name: "Mochi Ice Cream",
    description: "Traditional rice cake with ice cream filling",
    price: 6.50,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=400&fit=crop&crop=center",
    category: "desserts"
  },
  {
    id: 16,
    name: "Dorayaki",
    description: "Pancake sandwich with sweet red bean filling",
    price: 5.90,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop&crop=center",
    category: "desserts"
  }
]

const categories = [
  { id: "all", name: "Vse jedi", icon: "🍱" },
  { id: "sushi", name: "Sushi & Sashimi", icon: "🍣" },
  { id: "ramen", name: "Ramen & Rezanci", icon: "🍜" },
  { id: "appetizers", name: "Predjedi", icon: "🥟" },
  { id: "hot", name: "Glavne jedi", icon: "🥩" },
  { id: "desserts", name: "Sladice", icon: "🍡" }
]

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const filteredItems = activeCategory === "all"
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory)

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
            <h1 className="text-2xl font-bold text-white">Sakura BTC Meni</h1>
          </div>
          <Link href="/reservations">
            <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
              <Calendar className="w-4 h-4 mr-2" />
              Rezerviraj mizo
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={activeCategory === category.id
                  ? "bg-red-600 hover:bg-red-700"
                  : "border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                }
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="bg-zinc-800/50 border-zinc-700 hover:border-red-500/50 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                {item.popular && (
                  <Badge className="absolute top-4 left-4 z-10 bg-red-600 hover:bg-red-700">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                )}
                {item.spicy && (
                  <Badge className="absolute top-4 right-4 z-10 bg-orange-600 hover:bg-orange-700">
                    🌶️ Spicy
                  </Badge>
                )}
                {item.vegetarian && (
                  <Badge className="absolute top-4 right-4 z-10 bg-green-600 hover:bg-green-700">
                    🥬 Vegetarian
                  </Badge>
                )}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white text-lg">{item.name}</CardTitle>
                    <CardDescription className="text-zinc-400 text-sm mt-1">
                      {item.description}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-red-400 font-bold text-lg">
                      €{item.price.toFixed(2)}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="text-center">
                  <p className="text-zinc-400 text-sm mb-3">
                    Za naročilo pokličite: <span className="text-red-400 font-medium">+386 1 234 5678</span>
                  </p>
                  <Link href="/reservations">
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      Rezerviraj mizo
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


      </div>
    </div>
  )
}
