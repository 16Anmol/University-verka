import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Mail, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
export default function CampusLifePage() {
  // Sample image data - you can replace with your actual images
  const galleryImages = [
    {
      id: 1,
      imageSrc: "/verka.png",
      title: "Campus Building",
      description:
        "Modern infrastructure with state-of-the-art facilities for students.",
    },
    {
      id: 2,
      imageSrc: "/gallery2.jpg",
      title: "NSS SOCIETY",
      description:
        "Students of NSS Society raising awareness about drugs.",
    },
    {
      id: 3,
      imageSrc: "/gallery3.jpg",
      title: "Red Ribbon Club",
      description:
        "Regular dental checkup being done by Red Ribbon Club.",
    },
    {
      id: 4,
      imageSrc: "/gallery4.jpg",
      title: "National Science Day",
      description:
        "On the day of National Science Day , students made a chart about the career option in Science.",
    },
    {
      id: 5,
      imageSrc: "/sportact.png",
      title: "Sports Activity",
      description:
        "Sports facilities and competitions to promote physical fitness.",
    },
    {
      id: 6,
      imageSrc: "/gallery5.jpg",
      title: "NCC Cadets",
      description:
        "NCC to provide an environment to motivate young Indians to join the armed forces.",
    },
    {
      id: 7,
      imageSrc: "/gallery6.jpg",
      title: "Invited Lectures",
      description:
        "Faculity inviting guest lectures to provide knowledge to students.",
    },
    {
      id: 8,
      imageSrc: "/gallery7.jpg",
      title: "Jashan-e-Commerce",
      description:
        "Jashan organised by college.",
    },
    {
      id: 9,
      imageSrc: "/gallery8.jpg",
      title: "Ardaas Diwas",
      description:
        "Annual Ardas Diwas being celebrated to begin the journey of new academic session.",
    },
    {
      id: 10,
      imageSrc: "/convocation.jpg",
      title: "Convocation",
      description:
        "Convocation of students being done by college.",
    },
    {
      id: 11,
      imageSrc: "/eco club.jpg",
      title: "Eco Club",
      description:
        "Eco Club in the college spreading awareness about the environment.",
    },
    {
      id: 12,
      imageSrc: "/gallery12.jpg",
      title: "Seminar",
      description:
        "Seminar being conducted by honourable professor of college.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Page Title */}
        <section className="bg-[#0c2340] text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold">Campus Life</h1>
            <p className="mt-2 text-lg">
              Explore the vibrant life at GNDU College Verka-Amritsar
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#0c2340]">
                Life at GNDU College Verka
              </h2>
              <p className="text-gray-700">
                Our campus is a vibrant hub of academic, cultural, and
                recreational activities. Students enjoy a balanced life with
                modern facilities, engaging events, and a supportive community.
                Explore our gallery to get a glimpse of the enriching campus
                experience we offer.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery - Simplified to show all images together */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-[#0c2340]">
              Campus Gallery
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {galleryImages.map((item) => (
                <GalleryItem
                  key={item.id}
                  imageSrc={item.imageSrc}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-[#0c2340] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Experience Campus Life at GNDU College Verka
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join us to experience a vibrant campus life that balances academic
              excellence with extracurricular activities.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0c2340] text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Image
                  src="/university-logo.jpg"
                  alt="Guru Nanak Dev University Logo"
                  width={60}
                  height={60}
                  className="mr-3 bg-white rounded-full p-1"
                />
                <div>
                  <h3 className="text-lg font-bold">GNDU</h3>
                  <p className="text-sm text-gray-300">
                    College Verka-Amritsar
                  </p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Guru Nanak Dev University College, Verka-Amritsar is committed
                to providing quality education and fostering academic
                excellence.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-amber-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/academics"
                    className="text-gray-300 hover:text-amber-300"
                  >
                    Academics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admissions"
                    className="text-gray-300 hover:text-amber-300"
                  >
                    Admissions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Important Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/examination"
                    className="text-gray-300 hover:text-amber-300"
                  >
                    Examination
                  </Link>
                </li>
                <li>
                  <Link
                    href="/results"
                    className="text-gray-300 hover:text-amber-300"
                  >
                    Results
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-gray-300 hover:text-amber-300"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex">
                  <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span className="text-gray-300">
                    Guru Nanak Dev University College, Verka-Amritsar, Punjab -
                    143001
                  </span>
                </li>
                <li className="flex">
                  <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span className="text-gray-300">81465-14040</span>
                </li>
                <li className="flex">
                  <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span className="text-gray-300">osd.verka@gndu.ac.in</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 mt-6 text-center text-gray-300 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Guru Nanak Dev University
              College, Verka-Amritsar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Gallery Item Component
function GalleryItem({
  imageSrc,
  title,
  description,
}: {
  imageSrc: string;
  title: string;
  description: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
          <div className="relative h-48">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold">{title}</h3>
            <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="relative h-[400px] w-full">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
