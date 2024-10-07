import React from 'react';

// Helper component to render formatted text
const FormattedText = ({ text, formatting }) => {
  let formattedText = text;

  // Apply bold formatting
  if (formatting?.bold) {
    formatting.bold.forEach((boldText) => {
      formattedText = formattedText.replace(new RegExp(boldText, 'g'), <strong className="font-bold">{boldText}</strong>);
    });
  }

  // Apply italic formatting
  if (formatting?.italic) {
    formatting.italic.forEach((italicText) => {
      formattedText = formattedText.replace(new RegExp(italicText, 'g'), <em className="italic">{italicText}</em>);
    });
  }

  // Apply links
  if (formatting?.links) {
    formatting.links.forEach((link) => {
      formattedText = formattedText.replace(new RegExp(link, 'g'), <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{link}</a>);
    });
  }

  return <span>{formattedText}</span>;
};

// Main ReadmeRenderer component
const ReadmeRenderer = ({ data }) => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{data.project.name}</h1>
      <p className="mb-4">
        <a href={data.project.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          {data.project.url}
        </a>
      </p>
      
      <h2 className="text-2xl font-semibold mt-8">Authors</h2>
      <ul className="list-disc list-inside mb-4">
        {data.project.authors.map((author, index) => (
          <li key={index} className="mb-1">
            <a href={author.profile} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {author.name}
            </a>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mt-8">Introduction</h2>
      <p className="mb-4">
        <FormattedText text={data.project.introduction.text} formatting={data.project.introduction.formatting} />
      </p>

      <h2 className="text-2xl font-semibold mt-8">Description</h2>
      <h3 className="text-xl font-semibold mt-4">Inspiration</h3>
      <p className="mb-4">
        <FormattedText text={data.project.description.inspiration.text} formatting={data.project.description.inspiration.formatting} />
      </p>
      <h3 className="text-xl font-semibold mt-4">Core Functionality</h3>
      <p className="mb-4">{data.project.description.core_functionality.text}</p>
      <h3 className="text-xl font-semibold mt-4">Collaboration</h3>
      <p className="mb-4">
        <FormattedText text={data.project.description.collaboration.text} formatting={data.project.description.collaboration.formatting} />
      </p>

      <h2 className="text-2xl font-semibold mt-8">Tech Stack</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          Frontend: <a href={data.project.tech_stack.frontend.framework.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{data.project.tech_stack.frontend.framework.text}</a>
        </li>
        <li>
          Styling: <a href={data.project.tech_stack.styling.framework.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{data.project.tech_stack.styling.framework.text}</a>
        </li>
        <li>
          Backend: <a href={data.project.tech_stack.backend.platform.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{data.project.tech_stack.backend.platform.text}</a>
        </li>
        <li>
          Deployment: <a href={data.project.tech_stack.deployment.platform.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{data.project.tech_stack.deployment.platform.text}</a>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">Features</h2>
      <ul className="list-disc list-inside mb-4">
        {data.project.features.map((feature, index) => (
          <li key={index} className="mb-1">{feature.text}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mt-8">Application Flow</h2>
      <img src={data.project.application_flow.diagram.url} alt="Application Flow Diagram" className="w-full mb-4" />
      <p className="mb-4">{data.project.application_flow.diagram.description.text}</p>

      <h2 className="text-2xl font-semibold mt-8">Walkthrough</h2>
      <h3 className="text-xl font-semibold mt-4">Demo Login Credentials</h3>
      <p>Email: {data.project.walkthrough.demo_login.credentials.email.join(", ")}</p>
      <p>Password: {data.project.walkthrough.demo_login.credentials.password}</p>

      <h3 className="text-xl font-semibold mt-4">Account Creation</h3>
      <p>
        <FormattedText text={data.project.walkthrough.account_creation.url} formatting={null} />
        <br />
        {data.project.walkthrough.account_creation.description}
      </p>
      <p>
        <FormattedText text={data.project.walkthrough.account_creation.security.text} formatting={data.project.walkthrough.account_creation.security.formatting} />
      </p>

      <h3 className="text-xl font-semibold mt-4">Dashboard Navigation</h3>
      <p>{data.project.walkthrough.dashboard_navigation.description}</p>

      <h3 className="text-xl font-semibold mt-4">New Project Creation</h3>
      <ul className="list-disc list-inside mb-4">
        {data.project.walkthrough.new_project_creation.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
        <li>{data.project.walkthrough.new_project_creation.invite.description}</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">Canvas Usage</h3>
      <p>{data.project.walkthrough.canvas_usage.initial_canvas.text}</p>
      <p>{data.project.walkthrough.canvas_usage.drawing_tools.text}</p>
      <p>{data.project.walkthrough.canvas_usage.color_palette_position.text}</p>
      <p>{data.project.walkthrough.canvas_usage.chat_feature.text}</p>

      <h3 className="text-xl font-semibold mt-4">Real-Time Editing</h3>
      <p>{data.project.walkthrough.real_time_editing.description.text}</p>
      <p>
        <FormattedText text={data.project.walkthrough.real_time_editing.demo_video.url} formatting={null} />
      </p>

      <h2 className="text-2xl font-semibold mt-8">Appwrite Integration</h2>
      <p>
        <FormattedText text={data.project.appwrite_integration.documentation.text} formatting={null} />
      </p>
      <h3 className="text-xl font-semibold mt-4">Auth</h3>
      <p>{data.project.appwrite_integration.auth.text}</p>
      <h3 className="text-xl font-semibold mt-4">Database</h3>
      <p>{data.project.appwrite_integration.database.text}</p>
      <h3 className="text-xl font-semibold mt-4">Realtime</h3>
      <p>{data.project.appwrite_integration.realtime.text}</p>

      <h2 className="text-2xl font-semibold mt-8">Challenges</h2>
      <ul className="list-disc list-inside mb-4">
        {data.project.challenges.map((challenge, index) => (
          <li key={index}>{challenge}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mt-8">Repositories</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <FormattedText text={data.project.repositories.github.url} formatting={null} />
        </li>
        <li>
          <FormattedText text={data.project.repositories.website.url} formatting={null} />
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">Video Demo</h2>
      <p>
        <FormattedText text={data.project.video_demo.url} formatting={null} />
      </p>

      <h2 className="text-2xl font-semibold mt-8">Conclusion</h2>
      <p>
        <FormattedText text={data.project.conclusion.text} formatting={data.project.conclusion.formatting} />
      </p>
    </div>
  );
};

const App = () => {
  const readmeData = {
    "project": {
      "name": "CollabWrite",
      "url": "https://collaboration-tool.vercel.app/",
      "authors": [
        {
          "name": "Rishabh Dubey",
          "profile": "https://hashnode.com/@heyyakash"
        },
        {
          "name": "Divyesh Jain",
          "profile": "https://hashnode.com/@Djain2511"
        }
      ],
      "introduction": {
        "text": "CollabWrite is our submission for the Appwrite Hackathon, designed to help users unleash their creativity and communicate ideas visually.",
        "formatting": {
          "bold": ["CollabWrite"]
        }
      },
      "description": {
        "inspiration": {
          "text": "Inspired by Excalidraw, a web-based tool for creating diagrams, sketches, and illustrations.",
          "formatting": {
            "bold": ["Excalidraw"],
            "links": ["https://excalidraw.com/"]
          }
        },
        "core_functionality": {
          "text": "Provides a blank canvas for drawing and sketching with a variety of tools."
        },
        "collaboration": {
          "text": "Includes a built-in chat feature powered by Appwrite's Realtime Database.",
          "formatting": {
            "bold": ["Appwrite"],
            "links": ["https://appwrite.io/"]
          }
        }
      },
      "tech_stack": {
        "frontend": {
          "framework": {
            "text": "NextJS",
            "url": "https://nextjs.org/"
          }
        },
        "styling": {
          "framework": {
            "text": "TailwindCSS",
            "url": "https://tailwindcss.com/"
          }
        },
        "backend": {
          "platform": {
            "text": "Appwrite",
            "url": "https://appwrite.io/"
          }
        },
        "deployment": {
          "platform": {
            "text": "Vercel",
            "url": "https://vercel.com/dashboard"
          }
        }
      },
      "features": [
        {
          "text": "Use the canvas to draw diagrams, flowcharts, etc."
        },
        {
          "text": "Collaborate with others in real-time editing."
        },
        {
          "text": "In-built chat system for team communication."
        },
        {
          "text": "Download your canvas for offline use."
        }
      ],
      "application_flow": {
        "diagram": {
          "url": "https://cdn.hashnode.com/res/hashnode/image/upload/v1686607944692/e8a5602c-6b6a-46b8-bf884-5a4fbfc71042.jpeg?auto=compress,format&format=webp",
          "description": {
            "text": "Users can easily create shapes and work with touch devices."
          }
        }
      },
      "walkthrough": {
        "demo_login": {
          "credentials": {
            "email": ["demo1@gmail.com", "demo2@gmail.com"],
            "password": "testpassword"
          }
        },
        "account_creation": {
          "url": "https://collaboration-tool.vercel.app/login",
          "description": "Users can create an account or log in with demo credentials.",
          "security": {
            "text": "Handled by Appwrite for secure credential management.",
            "formatting": {
              "bold": ["Appwrite"]
            }
          }
        },
        "dashboard_navigation": {
          "description": "Redirected to the dashboard upon login, where users can see their drawing boards."
        },
        "new_project_creation": {
          "steps": [
            "Click on '+' button to start a new project.",
            "Fill out the form for solo or collaborative projects.",
            "Enter collaborator's email to send an invite."
          ],
          "invite": {
            "description": "Other users receive a notification to accept or decline the invite."
          }
        },
        "canvas_usage": {
          "initial_canvas": {
            "text": "Minimal canvas appears upon clicking 'Get Started'.",
            "formatting": {
              "italic": ["Get Started"]
            }
          },
          "drawing_tools": {
            "text": "Available drawing tools: arrows, squares, circles, lines, diamonds, text, and freehand."
          },
          "color_palette_position": {
            "text": "Left side of the canvas."
          },
          "chat_feature": {
            "text": "Right side, can be minimized."
          }
        },
        "real_time_editing": {
          "description": {
            "text": "Enabled by Appwrite's real-time database, allows multiple users to edit simultaneously.",
            "formatting": {
              "bold": ["Appwrite"]
            }
          },
          "demo_video": {
            "url": "https://www.youtube.com/watch?v=1AIm2VsOQE4",
            "text": "Watch the demo here."
          }
        }
      },
      "appwrite_integration": {
        "documentation": {
          "url": "https://appwrite.io/docs",
          "text": "Appwrite Documentation"
        },
        "auth": {
          "text": "Easy integration for authentication."
        },
        "database": {
          "text": "Stores project, chat, and invitation data."
        },
        "realtime": {
          "text": "Real-time features for chat and editing."
        }
      },
      "challenges": [
        "Working with the HTML Canvas API was complex.",
        "Drawing complex shapes required additional focus.",
        "Implemented touchEvents for mobile compatibility.",
        "Dealt with unexpected mouse behaviors.",
        "Decided on storing canvas data in data:image format."
      ],
      "repositories": {
        "github": {
          "url": "https://github.com/heyyakash/CollaborationTool",
          "text": "GitHub Repository"
        },
        "website": {
          "url": "https://collaboration-tool.vercel.app/",
          "text": "Live Website"
        }
      },
      "video_demo": {
        "url": "https://www.youtube.com/watch?v=1AIm2VsOQE4",
        "text": "Watch the demo here."
      },
      "conclusion": {
        "text": "Appwrite was crucial for the project, allowing us to achieve our goals efficiently. We aim to enhance the project further, and we're grateful to Appwrite and Hashnode for their support.",
        "formatting": {
          "bold": ["Appwrite", "Hashnode"]
        }
      }
    }
  }
  ;

  return <ReadmeRenderer data={readmeData} />;
};

export default App;
