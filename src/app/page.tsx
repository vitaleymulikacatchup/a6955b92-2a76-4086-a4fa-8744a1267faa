"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Coffee, Users, Star, Mail } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Spidey's Coffee"
          button={{
            text: "Order Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Your Friendly Neighborhood Coffee"
          description="Experience the amazing taste of our superhero-inspired coffee blends. Each cup delivers the power you need to save the day!"
          tag="Now Open"
          tagIcon={Coffee}
          buttons={[
            {
              text: "Order Now",
              href: "contact"
            },
            {
              text: "View Menu",
              href: "product"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/tmp/spiderman-drinking-coffee-at-a-cafe-real-1761320455425-637d9be5.jpg"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="We brew coffee with great power and great responsibility, bringing you the perfect blend of flavor and energy to fuel your heroic adventures"
          buttons={[
            {
              text: "Our Story",
              href: "about"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardThree
          title="Superhero Blends"
          description="Our signature coffee collection inspired by your favorite web-slinger"
          tag="Featured Menu"
          tagIcon={Coffee}
          products={[
            {
              id: "1",
              name: "The Amazing Signature Blend",
              price: "$12.99",
              imageSrc: "https://images.pexels.com/photos/33682396/pexels-photo-33682396.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              initialQuantity: 1
            },
            {
              id: "2",
              name: "Web-Slinger Latte",
              price: "$5.99",
              imageSrc: "https://images.pexels.com/photos/207287/pexels-photo-207287.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              initialQuantity: 1
            },
            {
              id: "3",
              name: "Spider-Mocha Supreme",
              price: "$6.49",
              imageSrc: "https://images.pexels.com/photos/6006665/pexels-photo-6006665.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              initialQuantity: 1
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Your Heroic Baristas"
          description="Our amazing team of coffee heroes dedicated to serving you the perfect cup"
          tag="Our Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Peter P.",
              role: "Head Barista",
              imageSrc: "https://images.pexels.com/photos/17516410/pexels-photo-17516410.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Gwen S.",
              role: "Coffee Specialist",
              imageSrc: "https://images.pexels.com/photos/13735967/pexels-photo-13735967.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real reviews from real coffee heroes"
          tag="Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Mary Jane W.",
              role: "Daily Coffee Drinker",
              company: "Daily Bugle",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/13735967/pexels-photo-13735967.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Miles M.",
              role: "Student",
              company: "Brooklyn College",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/23496954/pexels-photo-23496954.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Gwen S.",
              role: "Photographer",
              company: "Spider Photography",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/842548/pexels-photo-842548.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "Ned L.",
              role: "Tech Enthusiast",
              company: "Parker Industries",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4473398/pexels-photo-4473398.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          title="Order Your Hero Coffee Today"
          description="Join our newsletter for exclusive deals and new blend announcements. Your neighborhood coffee shop is here to serve!"
          tag="Get In Touch"
          tagIcon={Mail}
          inputPlaceholder="Enter your email for updates"
          buttonText="Join the Web"
          termsText="By signing up, you agree to receive updates about our amazing coffee blends and special offers."
          imageSrc="https://images.pexels.com/photos/4109747/pexels-photo-4109747.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          mediaPosition="left"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Menu",
              items: [
                {
                  label: "Signature Blends",
                  href: "product"
                },
                {
                  label: "Daily Specials",
                  href: "product"
                },
                {
                  label: "Gift Cards",
                  href: "contact"
                }
              ]
            },
            {
              title: "About",
              items: [
                {
                  label: "Our Story",
                  href: "about"
                },
                {
                  label: "Our Team",
                  href: "team"
                },
                {
                  label: "Location",
                  href: "contact"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Order Online",
                  href: "contact"
                },
                {
                  label: "Catering",
                  href: "contact"
                },
                {
                  label: "Reviews",
                  href: "testimonial"
                }
              ]
            }
          ]}
          copyrightText="© 2025 | Spidey's Coffee - Your Friendly Neighborhood Café"
        />
      </div>
    </ThemeProvider>
  );
}