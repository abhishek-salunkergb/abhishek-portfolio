# Abhishek Salunke — Senior-Engineered Developer Portfolio 🚀

> **Python Developer • Generative AI & LLM Systems • Machine Learning Engineer**  
> *B.E. Computer Science Graduate (CGPA 8.19, SPPU) • Published ML Research Co-Author*

[![Live Portfolio](https://img.shields.io/badge/Live%20Demo-abhishek--portfolio--cyan.vercel.app-7928CA?style=for-the-badge&logo=vercel)](https://abhishek-portfolio-cyan.vercel.app/)
[![License: Hybrid](https://img.shields.io/badge/License-Hybrid%20(MIT%20%2B%20Proprietary)-blue?style=for-the-badge)](LICENSE)
[![GitHub](https://img.shields.io/badge/GitHub-abhishek--salunkergb-181717?style=for-the-badge&logo=github)](https://github.com/abhishek-salunkergb)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Abhishek%20Salunke-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/abhishek-salunke-860761409)

---

## 🎯 Role-Specific Positioning URLs

Unlike generic portfolios, this portfolio dynamically adapts positioning, headlines, and project priorities based on the target job category:

- **Full Overview**: [`/`](https://abhishek-portfolio-cyan.vercel.app/)
- **Python Backend Developer**: [`/portfolio/python`](https://abhishek-portfolio-cyan.vercel.app/portfolio/python) *(Django, FastAPI, REST APIs, MySQL, Redis)*
- **Generative AI Developer**: [`/portfolio/genai`](https://abhishek-portfolio-cyan.vercel.app/portfolio/genai) *(LLMs, RAG, Whisper STT, Groq/Gemini, WebSockets)*
- **AI/ML Engineer**: [`/portfolio/aiml`](https://abhishek-portfolio-cyan.vercel.app/portfolio/aiml) *(Scikit-Learn, PyTorch, Random Forest, EDA & Preprocessing)*

---

## ⚡ Core Portfolio Systems & Architectural Features

### 1. ⚡ Recruiter View (60 Seconds Executive Review)
A dedicated, high-speed briefing designed for technical recruiters and hiring managers. Features a 60s reading countdown, target roles, 3 strongest core skills with telemetry, 2 verified projects, and one-click access to download resume PDF and copy contact credentials.

### 2. 📁 Proof of Work & Verification Matrix
A live status table demonstrating deployed systems over tutorial toys:
- **AI Interview Assistant** — `LIVE / BENCHMARKED` (FastAPI, Groq LLM, Whisper STT, WebSockets)
- **Production LLM Chatbot** — `PRODUCTION` (Flask, Gemini API, Redis cache, Quota Limiter)
- **Farmer Marketplace** — `LIVE` (Django REST, MySQL 3NF, Real-Time Bargaining API)
- **Hospital Management System** — `VERIFIED` (Clean OOP, Transaction Safety, RBAC)

### 3. 🔬 Mini Engineering Case Study (AI Interview Assistant)
An in-depth technical case study documenting:
- Architectural data flow: 16kHz PCM audio stream ➔ Whisper STT ➔ Vector RAG grounding ➔ Groq LLM streaming.
- **Latency Optimization**: Reduced response latency from **4,200ms to 840ms (80% drop)** by migrating from REST polling to duplex WebSockets and eliminating redundant LLM summarization calls.
- Negative constraints eliminating hallucinations, fault recovery, and v2 improvements (on-device ONNX Whisper & semantic vector caching).

### 4. 🧪 "Break My Project" Chaos & Resilience Testbench
An interactive fault simulator demonstrating defensive Python architecture when things fail:
- **HTTP 429 Too Many Requests**: Upstream LLM rate limit handled with exponential backoff + jitter and secondary fallback model.
- **Audio Stream Dropout**: Client-side audio ring buffer with WebSocket reconnect and packet replay.
- **Prompt Injection Defense**: Boundary detection and context isolation rejecting malicious instructions.
- **Database Outage**: Circuit breaker tripping to `OPEN` state serving cached Redis catalogs.

### 5. 🤖 Grounded Project Q&A Engine
Demonstrates AI capability directly on the website. Recruiters can click common questions or type custom inquiries. Strictly governed by negative constraints to guarantee zero hallucinations—every response is sourced directly from verified project records.

### 6. 💻 1-Minute Python Technical Challenge
Interactive Easy, Medium, and Hard Python challenges demonstrating algorithmic thinking, edge-case analysis, typed production code, and Big-O complexity bounds.

### 7. 🎯 Why Should You Interview Me?
6 brutally specific proof points linking directly to verifiable GitHub repositories, published research, and benchmarks.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, GSAP (ScrollTrigger, ScrollSmoother), Three.js, React Three Fiber
- **Backend & AI Integrations**: Python (FastAPI, Django, Flask), Google Gemini API, Groq LLM, Whisper STT, WebSockets
- **Databases & Caching**: MySQL, SQLite, Redis
- **Tooling & Infrastructure**: Vite, ESLint, Vercel

---

## 💻 Local Setup & Development

```bash
# 1. Clone repository
git clone https://github.com/abhishek-salunkergb/abhishek-portfolio.git
cd abhishek-portfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Compile and validate production build
npm run build
```

---

## 📄 License & Rights

This repository is licensed under a **Hybrid License Model**:

- **Software Code & Architecture**: Licensed under the [MIT License](LICENSE). You are welcome to inspect, study, and fork the underlying architecture for personal educational purposes.
- **Personal Content, Resume & Assets**: **All Rights Reserved**. The name Abhishek Salunke, personal resume PDF, project writeups, telemetry data, 3D character assets, and branding are strictly proprietary and may NOT be replicated or used for misrepresentation.
- **Upstream Attribution**: Special credit to Moncy Yohannan for the initial open-source UI scaffold inspiration.

For full legal terms, see the [LICENSE](LICENSE) file.
