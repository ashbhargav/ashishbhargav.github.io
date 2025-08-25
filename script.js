// Particles.js config
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#7c5cff"
    },
    "shape": {
      "type": "circle",
    },
    "opacity": {
      "value": 0.5,
      "random": false,
    },
    "size": {
      "value": 3,
      "random": true,
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#00d4ff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});

// Typed.js config
var typed = new Typed('.typed-text', {
    strings: ['cloud infrastructure.', 'CI/CD pipelines.', 'and reliable systems.'],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
});

// Mock last commit date
document.getElementById('last-commit-date').textContent = new Date().toLocaleDateString();

// Gemini Project Generator Logic
const generateBtn = document.getElementById('generate-project-btn');
const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close-button');

generateBtn.onclick = async () => {
    generateBtn.textContent = 'Generating...';
    generateBtn.disabled = true;

    const prompt = `
        Generate a single, creative, and challenging DevOps/Cloud project idea for a portfolio.
        The project should be suitable for an experienced DevOps engineer with skills in: AWS, Azure, GCP, Terraform, Docker, Kubernetes, Jenkins, Python, Ansible, Prometheus, and Grafana.
        
        Provide the response as a JSON object with the following structure:
        {
          "title": "Project Title",
          "description": "A detailed one-paragraph description of the project.",
          "tech_stack": ["Tech1", "Tech2", "Tech3", "Tech4", "Tech5"]
        }
    `;

    try {
        let chatHistory = [];
        chatHistory.push({ role: "user", parts: [{ text: prompt }] });
        const payload = {
            contents: chatHistory,
            generationConfig: {
                responseMimeType: "application/json",
            }
        };
        const apiKey = ""; // API key will be injected here
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
        
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const result = await response.json();
        
        if (result.candidates && result.candidates.length > 0 &&
            result.candidates[0].content && result.candidates[0].content.parts &&
            result.candidates[0].content.parts.length > 0) {
            
            const jsonText = result.candidates[0].content.parts[0].text;
            const project = JSON.parse(jsonText);

            modalBody.innerHTML = `
                <div class="project-card-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="tech-badges">
                        ${project.tech_stack.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                    </div>
                </div>
            `;
            modal.style.display = 'block';
        } else {
            throw new Error("Invalid response structure from API.");
        }

    } catch (error) {
        console.error('Error generating project idea:', error);
        modalBody.innerHTML = '<p style="color: var(--muted);">Sorry, something went wrong. Please try again later.</p>';
        modal.style.display = 'block';
    } finally {
        generateBtn.textContent = 'Generate a New Project Idea';
        generateBtn.disabled = false;
    }
};

closeBtn.onclick = () => {
    modal.style.display = 'none';
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};