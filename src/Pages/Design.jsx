import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 

const Design = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#74b9ff",
                    },
                    opacity: 0.1,
                },
                particles: {
                    color: {
                        value: ["#2c3e50", "#e67e22", "#f1c40f","#2980b9"], 
                    },

                    move: {
                        enable: true,
                        speed: 1,
                        direction: "none",
                        outModes: {
                            default: "destroy",
                        },
                    },
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 800,
                        },
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: 3,
                        random: true,
                    },
                    opacity: {
                        value: 0.5,
                    },
                },
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default Design;
