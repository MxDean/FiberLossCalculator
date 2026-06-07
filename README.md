# Fiber Optic Loss Calculator

A lightweight web-based Fiber Optic Loss Calculator designed for network engineers, telecom engineers, fiber technicians, and students to quickly estimate total optical link loss based on fiber length, connector loss, splice loss, and system margin.

---

## 📖 Overview

Fiber Optic Loss Calculator helps users perform optical budget calculations during network design, troubleshooting, and acceptance testing.

The calculator provides a simple interface for estimating total attenuation of a fiber optic link and determining whether the link meets the required optical power budget.

---

## ✨ Features

- Fiber Length Loss Calculation
- Connector Loss Calculation
- Splice Loss Calculation
- Engineering Safety Margin
- Total Link Attenuation Calculation
- Pass / Fail Evaluation
- Real-Time Results
- Responsive Web Interface
- Dark Cyber-Themed Dashboard
- User-Friendly Design

---

## 🧮 Formula Used

Total Loss (dB) is calculated using:

```text
Total Loss =
(Fiber Length × Fiber Attenuation)
+
(Number of Connectors × Connector Loss)
+
(Number of Splices × Splice Loss)
+
System Margin
```

### Example

```text
Fiber Length       : 10 km
Attenuation        : 0.35 dB/km
Connectors         : 4
Connector Loss     : 0.3 dB
Splices            : 10
Splice Loss        : 0.1 dB
System Margin      : 3 dB

Total Loss =
(10 × 0.35)
+
(4 × 0.3)
+
(10 × 0.1)
+
3

Total Loss = 8.7 dB
```

---

## 🚀 Technologies Used

| Technology | Purpose |
|------------|----------|
| HTML5 | User Interface |
| CSS3 | Styling |
| JavaScript | Real-Time Calculation |
| PHP | Backend Processing |
| Apache | Web Server |
| Ubuntu Server | Hosting Platform |

---

## 📂 Project Structure

```text
fiber-loss-calculator/
│
├── index.php
├── calculate.php
├── style.css
├── script.js
│
├── assets/
│   ├── images/
│   └── icons/
│
└── README.md
```

---

## 🖼️ Screenshots

### Dashboard

![Dashboard](assets/images/dashboard.png)

### Calculation Result

![Result](assets/images/result.png)

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/fiber-loss-calculator.git
```

Navigate into the project directory:

```bash
cd fiber-loss-calculator
```

Copy project files to Apache web root:

```bash
sudo cp -r * /var/www/html/
```

Restart Apache:

```bash
sudo systemctl restart apache2
```

Open your browser:

```text
http://localhost
```

---

## 📊 Typical Fiber Parameters

### Single Mode Fiber (SMF)

| Wavelength | Attenuation |
|------------|------------|
| 1310 nm | 0.35 dB/km |
| 1550 nm | 0.22 dB/km |

### Connector Loss

| Connector Type | Typical Loss |
|---------------|-------------|
| SC | 0.2 – 0.5 dB |
| LC | 0.2 – 0.5 dB |
| FC | 0.2 – 0.5 dB |

### Fusion Splice Loss

| Type | Typical Loss |
|--------|-------------|
| Fusion Splice | 0.05 – 0.1 dB |

---

## 🎯 Applications

This tool is useful for:

- FTTH Design
- Railway Communication Networks
- Metro Ethernet Networks
- Backbone Fiber Networks
- Data Center Connectivity
- Telecom Infrastructure Projects
- Fiber Acceptance Testing
- Engineering Training
- Educational Purposes

---

## 🔮 Future Enhancements

- OTDR Event Simulation
- Optical Power Budget Analysis
- PDF Report Export
- Multi-Core Fiber Support
- Interactive Fiber Route Planner
- Mobile-Friendly Dashboard
- Advanced Link Design Recommendation
- Historical Calculation Storage

---

## 🤝 Contributing

Contributions are welcome.

Feel free to fork this repository, submit issues, or create pull requests to improve the project.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Developed as a Fiber Optic Engineering Utility Tool for network planning, deployment, troubleshooting, and training purposes.
