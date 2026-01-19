import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Full Stack Development",
        description: "Proficient in building complete web applications using MERN stack and Django."
    },
    {
        icon: Rocket,
        title: "Fast Learner",
        description: "Quickly adapts to new technologies and frameworks to stay ahead in the industry."
    },
    {
        icon: Users,
        title: "Team Player",
        description: "Collaborates effectively with cross-functional teams to deliver high-quality products."
    },
    {
        icon: Lightbulb,
        title: "Problem Solver",
        description: "Adept at analyzing complex problems and implementing efficient solutions."
    },
];

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side Content */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                                About Me
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            Making progress,
                            <span className="font-serif italic font-normal text-white">
                                {" "}
                                one line of code at a time!
                            </span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                I'm Chijioke Okorie, and I'm a full stack developer with an awareness for building functional and seamless web applications.
                                I have experience and knowledge in both front-end and back-end development, and I look to use that in helping clients in improving their businesses.
                                I continue to learn and apply all that I retain, and would like for my experience to positively affect others and do the same.
                            </p>
                            <p>
                                Beyond coding, I have an appetite for continuous learning and application of knowledge in all things. 
                                Applying that trait to my projects and past work have allowed for me to help others in their efforts of improvement, 
                                as long as create relationships with people from so many walks of life. I appreciate the life, chances and community 
                                we have and enjoy displaying in everything that I do!
                            </p>
                            <p>
                                Here are a few highlights of my skills and expertise: 
                                JavaScript, HTML, CSS, EJS, Python, Node, Express, jQuery, 
                                Django, React, MongoDB, Mongoose, PostgreSQL, Firebase, Bootstrap, 
                                Materialize, TailwindCSS, Human Resources, Communication and Customer Service

                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                My mission is to leverage technology to create impactful solutions that drive progress and innovation.
                                Whether it's developing a user-friendly interface or architecting a robust backend system, I'm dedicated to
                                delivering high-quality results that exceed expectations.
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Hilights */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div
                                key={idx}
                                className="glass p-6 rounded-2xl animate-fade-in"
                                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};