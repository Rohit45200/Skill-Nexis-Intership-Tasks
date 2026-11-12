
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import ProfileCard from "./components/ProfileCard";
import SkillCard from "./components/SkillCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    const skills = [
        {
            title: "Frontend Development",
            description: "HTML, CSS, JavaScript and React"
        },
        {
            title: "Backend Development",
            description: "Node.js, Express.js and REST APIs"
        },
        {
            title: "Database",
            description: "MongoDB and MySQL"
        }
    ];

    return (
        <>
            <Navbar />

            <main className="container" id="home">
                <section className="hero">
                    <h1>React Components Practice</h1>
                    <p>
                        Learning to build reusable UI components
                        using React and props.
                    </p>

                    <Button text="Get Started" />
                    <Button text="Learn More" type="secondary" />
                </section>

                <section id="profile">
                    <h2 className="section-title">Profile</h2>

                    <ProfileCard
                        name="Rohit Kumar"
                        role="Full Stack MERN Developer"
                        description="Computer Science student interested in
                        web development and AI-powered applications."
                    />
                </section>

                <section id="skills">
                    <h2 className="section-title">My Skills</h2>

                    <div className="skills-grid">
                        {skills.map((skill, index) => (
                            <SkillCard
                                key={index}
                                title={skill.title}
                                description={skill.description}
                            />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default App;
