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
                                I'm Chijioke Okorie, a passionate Full Stack Developer with a knack for crafting efficient and scalable web applications.
                                With a strong foundation in both front-end and back-end technologies, I thrive on turning complex problems into elegant solutions.
                                My journey in tech has been fueled by a relentless curiosity and a commitment to continuous learning.
                            </p>
                            <p>
                                Beyond coding, I enjoy collaborating with diverse teams, sharing knowledge, and contributing to open-source projects.
                                When I'm not immersed in code, you can find me exploring the latest tech trends or indulging in a good book.
                                Let's connect and build something amazing together!
                            </p>
                            <p>
                                Here are a few highlights of my skills and expertise:
                                HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, Redux, TypeScript,
                                Tailwind CSS, Next.js, RESTful APIs, GraphQL, Docker, AWS, Git, Python, Django.
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                My mission is to leverage technology to create impactful solutions that drive progress and innovation.
                                Whether it's developing a user-friendly interface or architecting a robust backend system, I am dedicated to
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