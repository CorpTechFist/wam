import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Quote,
  Heart,
  Star,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useTranslation } from "./TranslationContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Local images
import StaciMike from "../assets/testimonials/Staci_Mike.jpg";
import carter from "../assets/testimonials/carter.png";
import jameyandfamily from "../assets/testimonials/jameyandfamily.png";
import tyrell from "../assets/testimonials/tyArab.jpg";
import jay from "../assets/testimonials/Jay.png";
import mercedes from "../assets/testimonials/mercedes.png";
import seanfromoh from "../assets/testimonials/seanfromoh.png";

export function Testimonials() {

  const { translations } = useTranslation();
  const [expandedCards, setExpandedCards] = useState<number[]>(
    [],
  );

  const toggleExpanded = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index],
    );
  };

  const testimonials = [
    {
      name: "Staci & Mike",
      story:
        "My name is Staci & my life partner Mike. We want to express a huge appreciation to the founder of WAM (Tonya). I first needed help obtaining my birth certificate from Mississippi which needed to be included with our Section 8 housing application. WAM was able to order it & have it delivered. I now had everything to qualify for housing. Which was in need considering we were homeless & living in a tent. Once qualified we received a Section 8 housing voucher, but application fees & deposits were not included. WAM was able to cover 3 application fees which one of those included the place we now live in, as of February 7 we signed our lease with Housing Connect and now have a home. While we had our struggles, we kept our heads up & stayed positive. Tonya was a great friend when I needed someone to just talk with about my emotions surrounding our situation. WAM was also able to help with a few food orders from Walmart pickup. She is currently helping me find a dental surgeon to do dental implants discounted or pro bono, (crossing my fingers), and continues to help us with food when needed. Staci & Mike are now thriving!",
      type: "testimonial",
    },
    {
      name: "Carter",
      story:
        "I'm blessed to have met Tonya , the founder of WAM, back in 2010. I was a scrappy kid traveling the states trying to deal with the hand life dealt - a diagnosis of PTSD at a young age. It was my first winter in Utah and I didn't know many folks. She took me in and helped me have a safe space to stay til I was able to continue on with my travels. Fast forward over a decade to recently. I found myself in a rough patch when life happened. Tonya reached out to me telling me about WAM. They have provided me with counseling, a solid mentorship, and inspiration to keep going. I was able to receive resume assistance through WAM, which led to a good job. They even helped me with gas when I exhausted my savings to make it to the new job in my truck. When I called Tonya after my first setback at the new job and she spent 3 hours talking to me on the phone with a variety of pointers, good conversation, and even philosophy. My employer was impressed with the results of having a solid mentor like Tonya and WAM. I have never been one to reach out to agencies or non-profits, but what WAM is doing is something unique, helpful, and basically a lifesaver. They say it takes a village to raise a child. I prefer to think it takes a village to heal a wounded inner child. WAM and her team are eager to help and not in a judgmental way. I can't say thanks enough and look forward to the bright future ahead between my drive to succeed and the solid assistance from WAM!",
      type: "testimonial",
    },
    {
      name: "Jamey & Family",
      story:
        "Jamey is a resident of SLC and a loyal advocate for the unhoused and underprivileged. Her and her family have endured trauma and hard times over the decades, however, continue to manage life and remain housed. Jamey is an individual who qualified for our WAM Cleaning/Sanitation Service, and our team was able to offer this to her twice in the past year. The WAM Team also provided Jamey with legal support services and worked with her to gather all necessary information and prepare final documents to file in court. Jamey has donated clothing along with other items to WAM, to show her appreciation, and we greatly appreciate it! Jamey also refers others, like Staci & Mike, to our organization. Helping people go from striving to thriving!",
      type: "success story",
    },
    {
      name: "Tyrell",
      story:
        "I am Ty, WAM found me during 2020, at 17 years old, on the streets, I was alone and scared. My family was broken, mother mentally ill and an addict, father in Iraq and I have never met, my brothers involved in gangs, or incarcerated. WAM helped me find a youth shelter in Ogden, where I stayed for about a month, while they had been supplying me with clothes and other necessities. The shelter was locking me out in 19-degree weather without a coat for punishment, keeping me outside in dead winter until 10:00 p.m. for touching a computer and not apologizing for it. This is when WAM took me in and housed me temporarily. They helped me obtain BC, SS Card, and ID so I was able to gain employment and go back to high school and get my GED. I had employment within a week and saved up to get my DL, needed to take driving school and pass. I successfully did and was granted a DL. I enrolled in school to finish my GED and got me a passport! I am now living on my own and have traveled to Florida and Colorado and have been THRIVING! I left WAM loving myself and ability to be self-sufficient and a contributing citizen! update: Ty has since connected with his father and is becoming familiar with his heritage, happy and living his life!",
      type: "testimonial",
    },
    {
      name: "Jay",
      story:
        "I am Jay, I am a recovering addict and suicide survivor. I am an amputee from the knees down and have many other debilitating medical issues. I have been homeless for over 20 years and am finally off the streets and into temporary shelter for medically vulnerable people, while I wait for permanent housing. WAM found me in Sandy with a sign asking for help. They gave me a card, and after looking at the card, it inspired me to call them, so I did. They were able to get me into the shelter the next day. They transported me from downtown and successfully got me admitted. They have provided me with food, clothes, other items to get along while in the shelter, as well as funded my renewal for my medical card and cost of the doctor appointment, as it is not covered by Medicaid. WAM saved me and has helped me in more ways than any other has. They mean what they say and come through. WAM Team is helping me get off the streets, and the help I need.",
      type: "testimonial",
    },
    {
      name: "Mercedes",
      story:
        "Mercedes was a young girl in a youth shelter being treated poorly. She was with Ty, another boy WAM helped and housed temporarily. Mercedes had come from a home where her mother was absent, father absent, and an abusive caretaker. WAM provided her with rides, safety, temporary shelter, food and guidance. We hope Mercedes is back in school and with people who love her.",
      type: "success story",
    },
    {
      name: "Sean - from OH",
      story:
        "WAM found me in a graveyard in OH one afternoon. I was not well, and the weather was heading for rain. I was robbed and just trying to figure out what I was going to do, feeling down and worthless. When Tonya and Rob approached me, I was tired and hungry, and they kindly provided me with a warm meal and drink. They later brought back a tent and other items to help me while I found housing. They gave me inspiration to go on and to keep moving forward, back to owning my own business and having my own home. I am thankful for all their support and for answering the phone when I called. I am finding my way back and they have given me guidance along the way.",
      type: "testimonial",
    },
  ];

  const profileImages = [
    StaciMike,
    carter,
    jameyandfamily,
    tyrell,
    jay,
    mercedes,
    seanfromoh,
  ];

  return (
    <section
      id="testimonials"
      className="pt-0 pb-10 relative overflow-hidden border-t border-b border-white"
      style={{ background: "#ffffff" }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="p-8 max-w-4xl mx-auto text-center">
             <h3 className="text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight pb-2 font-bold tracking-tight text-violet-700"
  style={{ WebkitTextFillColor: "#7c3aed" }}
>
              {translations.news?.title ||
                "Testimonials & Success Stories"}
            </h3>
            <p className="text-sm md:text-base text-black max-w-3xl mx-auto leading-relaxed">
              {translations.news?.subtitle ||
                "These are just some of the people WAM has helped journey from barely surviving to thriving!"}
              <br />
              <span className="text-indigo-600 font-semibold italic text-base">
                {translations.news?.description ||
                  "We help by providing love, support, and resources to those in need, with real results and without abandonment."}
              </span>
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const image =
              profileImages[index % profileImages.length];
            const expanded = expandedCards.includes(index);

            return (
              <div
                key={index}
                className={`transition-all duration-500 hover:scale-[1.01] ${
                  index === testimonials.length - 1 &&
                  testimonials.length % 2 !== 0
                    ? "lg:col-span-2 lg:max-w-3xl lg:mx-auto"
                    : ""
                }`}
              >
                <Card className=" shadow-xl bg-white/90 backdrop-blur-md hover:shadow-2xl hover:border-purple-400 transition-all duration-500">
                  <CardContent className="p-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <Badge
                        variant="secondary"
                        className="bg-gradient-to-r from-purple-100 to-amber-50 text-purple-900 border border-purple-200/50 px-4 py-1.5 text-sm font-semibold capitalize shadow-sm"
                      >
                        {testimonial.type === "testimonial" && (
                          <Heart className="w-4 h-4 mr-2 text-purple-600" />
                        )}
                        {testimonial.type ===
                          "success story" && (
                          <Star className="w-4 h-4 mr-2 text-amber-500" />
                        )}
                        {testimonial.type}
                      </Badge>
                      <Quote className="w-8 h-8 text-purple-300 rotate-180" />
                    </div>

                    {/* Profile */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-amber-500 rounded-full blur opacity-60"></div>
                        <ImageWithFallback
                          src={image}
                          alt={testimonial.name}
                          className="relative w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-purple-900 text-lg">
                          {testimonial.name}
                        </h3>
                        <p className="text-purple-600 text-sm font-medium">
                          WAM Alliance Client
                        </p>
                      </div>
                    </div>

                    {/* Story */}
                    <div className="mb-6">
                      <blockquote className="text-gray-800 text-base leading-relaxed italic relative">
                        <Quote className="w-5 h-5 text-purple-200 absolute -top-2 -left-2" />
                        <div className="relative z-10 pl-6">
                          <div
                            className={`transition-[max-height] duration-500 ease-in-out overflow-hidden`}
                            style={{
                              maxHeight: expanded
                                ? "1000px"
                                : "100px",
                            }}
                          >
                            <p
                              style={{
                                fontFamily:
                                  "Inter, system-ui, sans-serif",
                              }}
                            >
                              {testimonial.story}
                            </p>
                          </div>
                          {testimonial.story.length > 180 && (
                            <button
                              onClick={() =>
                                toggleExpanded(index)
                              }
                              className="mt-2 text-purple-600 hover:text-purple-800 font-medium text-sm flex items-center gap-1 transition-colors"
                            >
                              {expanded ? (
                                <>
                                  Read Less{" "}
                                  <ChevronUp className="w-4 h-4" />
                                </>
                              ) : (
                                <>
                                  Read More{" "}
                                  <ChevronDown className="w-4 h-4" />
                                </>
                              )}
                            </button>
                          )}
                        </div>
                      </blockquote>
                    </div>

                    {/* Footer */}
                    <div className="border-t border-purple-100 pt-4 mt-auto">
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                        <div className="text-xs text-purple-500 font-medium">
                          Verified Impact Story
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}