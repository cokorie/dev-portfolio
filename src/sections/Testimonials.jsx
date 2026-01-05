import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
    {
        quote: "What an amazing experience working with this developer! Their expertise and dedication truly brought our project to life.",
        author: "Jane Doe, CEO of TechCorp",
        role: "CEO",
        avatar: "#"
    },
    {
        quote: "Great to work with, highly recommended!",
        author: "John Smith, Founder of InnovateX",
        role: "Founder",
        avatar: "#"
    },
    {
        quote: "Reliable and skilled developer who delivers on time.",
        author: "Alice Johnson, CTO of DevSolutions",
        role: "CTO",
        avatar: "#"
    },
    {
        quote: "Superb quality and attention to detail.",
        author: "Michael Brown, Project Manager at BuildIt",
        role: "Project Manager",
        avatar: "#"
    },
];

export const Testimonials = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    const next = () => {
        setActiveIdx((prev) => ((prev + 1) % testimonials.length));
    }

    const previous = () => {
        setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }

    return (
        <section id="testimonials" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Testimonials</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">Client Feedback {" "}
                        <span className="font-serif italic font-normal text-white">{" "}speaking volumes.</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        Don't just take my word for it. Here's what some of my clients have to say about working with me.
                    </p>
                </div>
                {/* Testimonials Carousel */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Main Carousel */}
                        <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
                            <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                                <Quote className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">{testimonials[activeIdx].quote}</blockquote>
                            <div className="flex items-center gap-4">
                                <img src={testimonials[activeIdx].avatar} alt={testimonials[activeIdx].author} className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20" />
                                <div className="flex items-center gap-4">
                                    <div className="font-semibold">{testimonials[activeIdx].author}</div>
                                    <div className="text-sm text-muted-foreground">{testimonials[activeIdx].role}</div>
                                </div>
                            </div>
                        </div>
                        {/* Testimonials Navigation */}
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all" onClick={previous}>
                                <ChevronLeft />
                            </button>
                            <div className="flex gap-2">
                                {testimonials.map((_, idx) => (
                                    <button onClick={() => setActiveIdx(idx)} className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIdx ? "w-8 bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`} />
                                ))}
                            </div>
                            <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all" onClick={next}>
                                <ChevronRight />
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
}