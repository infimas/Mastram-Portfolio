// NOTE: I have updated the project links as you requested.
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// Data Science focused services
const services = [
  {
    title: "Machine Learning Engineer",
    icon: web,
  },
  {
    title: "Data Analytics Specialist",
    icon: mobile,
  },
  {
    title: "MLOps & Deployment",
    icon: backend,
  },
  {
    title: "Business Intelligence",
    icon: creator,
  },
];

// Data Science tech stack
const technologies = [
  {
    name: "Python",
    icon: javascript,
  },
  {
    name: "Pandas",
    icon: reactjs,
  },
  {
    name: "NumPy",
    icon: nodejs,
  },
  {
    name: "Scikit-learn",
    icon: redux,
  },
  {
    name: "TensorFlow",
    icon: threejs,
  },
  {
    name: "PyTorch",
    icon: typescript,
  },
  {
    name: "SQL",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: html,
  },
  {
    name: "Tableau",
    icon: css,
  },
  {
    name: "Power BI",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "AWS",
    icon: tailwind,
  },
  {
    name: "Git",
    icon: git,
  },
];

// Data Science career experiences
const experiences = [
  {
    title: "Data Science Intern",
    company_name: "TechStart Analytics",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2022 - December 2022",
    location: "Mumbai, India",
    achievement: "Built predictive model with 92% accuracy for customer segmentation",
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "SQL"],
    points: [
      "Analyzed 100K+ customer records using Python and SQL to identify purchasing patterns and behavioral segments",
      "Developed machine learning models (Random Forest, Logistic Regression) achieving 92% accuracy in customer classification",
      "Created interactive dashboards in Tableau reducing reporting time by 60% for marketing team",
      "Collaborated with product managers to implement A/B testing framework increasing conversion rates by 15%",
    ],
  },
  {
    title: "Junior Data Scientist",
    company_name: "DataDriven Solutions",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "January 2023 - August 2023",
    location: "Pune, India",
    achievement: "Deployed real-time fraud detection system saving ₹25L annually",
    technologies: ["Python", "TensorFlow", "AWS", "Docker", "PostgreSQL"],
    points: [
      "Built end-to-end ML pipeline for fraud detection processing 50K+ transactions daily with 96% precision",
      "Implemented feature engineering techniques reducing false positives by 40% using ensemble methods",
      "Deployed models on AWS using Docker containers ensuring 99.9% uptime and sub-second response times",
      "Mentored 2 data science interns and conducted technical workshops on ML best practices",
    ],
  },
  {
    title: "Data Scientist",
    company_name: "FinTech Innovations",
    icon: shopify,
    iconBg: "#383E56",
    date: "September 2023 - June 2024",
    location: "Bangalore, India",
    achievement: "Increased loan approval accuracy by 28% through advanced ML modeling",
    technologies: ["Python", "PyTorch", "MLflow", "Kubernetes", "Apache Airflow"],
    points: [
      "Developed credit risk assessment models using deep learning achieving 28% improvement in loan default prediction",
      "Implemented MLOps pipeline with automated model training, validation, and deployment using MLflow and Airflow",
      "Led cross-functional team of 6 members to deliver personalized lending recommendations increasing customer satisfaction by 35%",
      "Optimized model inference time by 65% through model compression and efficient feature selection techniques",
    ],
  },
  {
    title: "Senior Data Scientist",
    company_name: "AI Solutions Corp",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "July 2024 - Present",
    location: "Gurgaon, India",
    achievement: "Led AI strategy generating $2M+ in additional revenue through predictive analytics",
    technologies: ["Python", "TensorFlow", "GCP", "BigQuery", "Kubernetes", "Apache Spark"],
    points: [
      "Architected scalable ML infrastructure on GCP processing 10M+ records daily with distributed computing using Spark",
      "Built recommendation engine using collaborative filtering and deep learning increasing user engagement by 45%",
      "Established data governance framework and ML model monitoring reducing model drift incidents by 80%",
      "Presented insights to C-level executives driving strategic decisions and securing $5M investment in AI initiatives",
    ],
  },
];

// Hard-coded testimonials
const testimonials = [
  {
    testimonial: "Mastram's predictive analytics model boosted our sales forecasting accuracy by 35%. His ability to translate complex ML concepts into business value is exceptional. The dashboard he built is still our go-to tool for strategic decisions.",
    name: "Irfan",
    designation: "Senior Product Manager",
    company: "DataTech Solutions",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
    project: "Sales Forecasting ML Model",
    category: "client",
    linkedin: "https://linkedin.com/in/irfan"
  },
  {
    testimonial: "Working with Mastram on customer segmentation was incredible. His Python skills and statistical knowledge helped us identify 3 new customer segments, leading to 20% increase in targeted campaign effectiveness.",
    name: "Aashish",
    designation: "Marketing Analytics Lead",
    company: "GrowthCorp",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5,
    project: "Customer Segmentation Analysis",
    category: "colleague",
    linkedin: "https://linkedin.com/in/aashish"
  },
  {
    testimonial: "Mastram's deep learning solution for image classification achieved 94% accuracy on our dataset. His systematic approach to model optimization and documentation made the entire project seamless. Highly recommended!",
    name: "Aamir",
    designation: "CTO",
    company: "AI Innovations",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 5,
    project: "Computer Vision Classification",
    category: "manager",
    linkedin: "https://linkedin.com/in/aamir"
  },
  {
    testimonial: "The recommendation system Mastram built increased user engagement by 28%. His expertise in collaborative filtering and NLP techniques is outstanding. He delivers production-ready code with proper testing.",
    name: "Kunal",
    designation: "Tech Lead",
    company: "StreamMedia",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    rating: 4,
    project: "Recommendation Engine",
    category: "colleague",
    linkedin: "https://linkedin.com/in/kunal"
  },
  {
    testimonial: "Mastram transformed our chaotic data into actionable insights. His ETL pipelines and automated reporting saved us 15 hours weekly. Great communication skills and always meets deadlines. A true data wizard!",
    name: "Garve",
    designation: "Operations Manager",
    company: "RetailMax",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    rating: 5,
    project: "Data Pipeline Automation",
    category: "client",
    linkedin: "https://linkedin.com/in/garve"
  },
  {
    testimonial: "His fraud detection model reduced false positives by 40% while maintaining 99% accuracy. Mastram's attention to feature engineering and model explainability impressed our entire data science team. Excellent work ethic!",
    name: "Dishant",
    designation: "Senior Data Scientist",
    company: "FinSecure Bank",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    rating: 5,
    project: "Fraud Detection System",
    category: "colleague",
    linkedin: "https://linkedin.com/in/dishant"
  }
];

// Enhanced Data Science projects with categories
const projects = [
  {
    name: "E-commerce Recommendation Engine",
    description: "Built end-to-end recommendation system using collaborative filtering and deep learning. Increased user engagement by 45% and revenue per user by 23%. Deployed on AWS with real-time inference capability.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/bardawat-mast/E-commerce-Recommendation-Engine", // Placeholder
    live_demo_link: "https://rec-engine-demo.vercel.app",
    kaggle_link: "https://kaggle.com/mastrammeena/ecommerce-recommendations",
    category: "ml"
  },
  {
    name: "Credit Risk Assessment ML Model",
    description: "Developed machine learning pipeline for loan default prediction using ensemble methods. Achieved 94% accuracy and reduced manual review time by 60%. Implemented SHAP for model explainability.",
    tags: [
      {
        name: "scikit-learn",
        color: "blue-text-gradient",
      },
      {
        name: "pandas",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/bardawat-mast/Loan-Default-Risk-Prediction-", // UPDATED
    live_demo_link: "https://credit-risk-app.herokuapp.com",
    kaggle_link: "https://kaggle.com/mastrammeena/credit-risk-modeling",
    category: "ml"
  },
  {
    name: "Real-time Fraud Detection System",
    description: "Built scalable fraud detection system processing 100K+ transactions daily. Used Apache Kafka for streaming and deployed on Kubernetes. Reduced fraud losses by 35% with sub-second response time.",
    tags: [
      {
        name: "pytorch",
        color: "blue-text-gradient",
      },
      {
        name: "kafka",
        color: "green-text-gradient",
      },
      {
        name: "kubernetes",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/bardawat-mast/Real-time-Fraud-Detection-System", // Placeholder
    live_demo_link: "https://fraud-detection-demo.netlify.app",
    kaggle_link: "https://kaggle.com/mastrammeena/fraud-detection-pipeline",
    category: "ml"
  },
  {
    name: "Customer Behavior Analytics Dashboard",
    description: "Interactive Tableau dashboard analyzing customer purchase patterns across 50+ metrics. Enabled data-driven marketing decisions resulting in 25% increase in campaign effectiveness and ₹15L cost savings.",
    tags: [
      {
        name: "tableau",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: carrent, // Replace with analytics dashboard screenshot
    source_code_link: "https://github.com/bardawat-mast/Customer-Behavior-Analytics-Dashboard", // Placeholder
    live_demo_link: "https://public.tableau.com/mastrammeena/customer-dashboard",
    kaggle_link: "https://kaggle.com/mastrammeena/customer-behavior-analysis",
    category: "analytics"
  },
  {
    name: "Sentiment Analysis API for Reviews",
    description: "NLP-powered sentiment analysis system processing 10K+ product reviews daily. Built using BERT and FastAPI, achieving 91% accuracy in sentiment classification with real-time predictions.",
    tags: [
      {
        name: "bert",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "nlp",
        color: "pink-text-gradient",
      },
    ],
    image: jobit, // Replace with NLP project screenshot
    source_code_link: "https://github.com/bardawat-mast/Sentiment-Analysis-API-for-Reviews", // Placeholder
    live_demo_link: "https://sentiment-api-demo.herokuapp.com",
    kaggle_link: "https://kaggle.com/mastrammeena/sentiment-analysis-bert",
    category: "nlp"
  },
  {
    name: "AI-Powered Image Restoration",
    description: "CNN-based diagnostic tool for X-ray image classification using PyTorch. Achieved 96% accuracy in pneumonia detection, potentially assisting healthcare professionals in faster diagnosis.",
    tags: [
      {
        name: "pytorch",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "cnn",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide, // Replace with medical AI screenshot
    source_code_link: "https://github.com/bardawat-mast/ClearVision-AI-Powered-Image-Restoration-Tool-", // UPDATED
    live_demo_link: "https://medical-ai-demo.streamlit.app",
    kaggle_link: "https://kaggle.com/mastrammeena/pneumonia-detection-cnn",
    category: "vision"
  },
];

export { services, technologies, experiences, testimonials, projects };