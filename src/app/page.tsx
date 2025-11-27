import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Phone } from "lucide-react"
import Link from "next/link"



const menuCategories = [
  {
    name: "Sushi & Sashimi",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=600&fit=crop",
    items: 15,
    featured: true
  },
  {
    name: "Ramen & Rezanci",
    image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=800&h=600&fit=crop",
    items: 8,
    featured: true
  },
  {
    name: "Predjedi",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d7d9?w=800&h=600&fit=crop",
    items: 12,
    featured: false
  },
  {
    name: "Glavne jedi",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop",
    items: 10,
    featured: false
  },
  {
    name: "Sladice",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&h=600&fit=crop",
    items: 6,
    featured: false
  },
  {
    name: "Pijače",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&h=600&fit=crop",
    items: 18,
    featured: false
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">桜</span>
            </div>
            <h1 className="text-2xl font-bold text-white">Umikaze BTC</h1>
            <nav className="hidden md:flex space-x-6 ml-8">
              <Link href="/menu" className="text-zinc-300 hover:text-white transition-colors">
                Meni
              </Link>
              {/* <Link href="/reservations" className="text-zinc-300 hover:text-white transition-colors">
                Rezervacije
              </Link>*/} 
            </nav>
          </div>
          {/*<div className="flex items-center space-x-4">
            <Link href="/reservations">
              <!-- 
              <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                <Calendar className="w-4 h-4 mr-2" />
                Rezerviraj mizo
              </Button>
              -->
            </Link> 
          </div>*/}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 to-transparent z-10" />

  <img
    src="https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=1200&h=400&fit=crop"
    alt="Japonska kuhinja"
    className="w-full h-full object-cover"
  />

  <div className="absolute inset-0 z-20 flex items-center justify-center">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-lg mx-auto">
        
        <h2 className="text-center text-5xl font-bold text-white mb-4 leading-tight">
          Avtentični japonski<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
            okusi
          </span>
        </h2>

        <p className="text-zinc-300 text-lg mb-6">
          Doživite najboljšo japonsko kuhinjo v srcu Slovenije!
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/menu">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 w-full sm:w-auto">
              Oglejte si meni
            </Button>
          </Link>
        </div>

      </div>
    </div>
  </div>
</section>


      {/* About Umikaze BTC */}
      <section className="py-16 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="border-red-500 text-red-400 mb-4">
              O nas
            </Badge>
            <h3 className="text-3xl font-bold text-white mb-4">
              Dobrodošli v Umikaze BTC
            </h3>
            <p className="text-zinc-400 max-w-3xl mx-auto text-lg leading-relaxed">
              Kjer se tradicionalna japonska kuhinja sreča s sodobno priročnostjo. "Umikaze" predstavlja lepoto češnjevih cvetov in japonsko dediščino. Doživite avtentične japonske okuse izpod rok pravih japonskih kulinaričnih mojstrov.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-zinc-800/50 border-zinc-700 hover:border-red-500/50 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🍱</span>
                </div>
                <CardTitle className="text-white">Bistro restavracija</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-300 text-center">
                  Uživajte v naši prijetni atmosferi z avtentičnimi japonskimi jedmi, pripravljenimi s strani izkušenih japonskih kuharjev z uporabo tradicionalnih tehnik.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800/50 border-zinc-700 hover:border-red-500/50 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🚚</span>
                </div>
                <CardTitle className="text-white">Dostava hrane</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-300 text-center">
                  Naročite po telefonu za hiter prevzem. Sveži sushi, vroči ramen in vse vaše najljubše jedi pripravljene takrat, ko jih potrebujete.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800/50 border-zinc-700 hover:border-red-500/50 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎉</span>
                </div>
                <CardTitle className="text-white">Catering storitve</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-300 text-center">
                  Popolno za dogodke, zabave in korporativne skupine. Avtentična japonska kuhinja na vašem naslovu!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="border-red-500 text-red-400 mb-4">
              Naš meni
            </Badge>
            <h3 className="text-3xl font-bold text-white mb-4">
              Odkrijte naše kategorije
            </h3>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Od tradicionalnega sushija do okusnega ramena, odkrijte avtentične japonske okuse
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuCategories.map((category) => (
              <Card key={category.name} className={`bg-zinc-800/50 border-zinc-700 hover:border-red-500/50 transition-all duration-300 hover:scale-105 overflow-hidden ${category.featured ? 'lg:col-span-1 md:col-span-1' : ''}`}>
                <div className="relative h-48 overflow-hidden">
                  {category.featured && (
                    <Badge className="absolute top-4 left-4 z-10 bg-red-600 hover:bg-red-700">
                      Predstavljeno
                    </Badge>
                  )}
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{category.name}</CardTitle>
                  <CardDescription className="text-zinc-400">
                    {category.items} Jedi na voljo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/menu">
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      Oglejte si {category.name}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant Info */}
      <section className="py-16 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Delovni čas</h4>
              <p className="text-zinc-400">Pon-Ned: 11:00 - 22:00</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Lokacija</h4>
              <p className="text-zinc-400"> Hala 18, BTC Ljubljana, Slovenija</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              {/*<h4 className="text-white font-semibold mb-2">Rezervacije</h4>*/}
              <p className="text-zinc-400">+386 1 234 5678</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-zinc-400">
            © 2025 Umikaze BTC. Prinašamo avtentične japonske okuse v Slovenijo.
          </p>
        </div>
      </footer>
    </div>
  )
}
