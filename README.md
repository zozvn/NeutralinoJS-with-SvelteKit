### **Project Introduction – NeutralinoJS + SvelteKit Hybrid**

Before getting started, make sure you have **Node.js** and **NeutralinoJS** installed on your system.

This project combines the simplicity of **NeutralinoJS** for lightweight desktop applications with the power of **SvelteKit** for building dynamic frontend interfaces.

While you can use standard `npm` or `npx` to build and run the SvelteKit frontend, I highly recommend giving **Bun** a try — it's incredibly fast and works seamlessly with modern JS tooling. However, Bun is **completely optional** and not a requirement.

> In short: Node is required, Bun is optional — but once you try it, you might not want to go back 😉

---

### 🧰 How to Clone This Project Using Git

> 💡 **Note**: Make sure you have **Git CLI** installed on your system.
> If you don’t have Git installed yet, follow the instructions below:

#### 🔧 Install Git via terminal

* **macOS** (via Homebrew):

  ```bash
  brew install git
  ```

* **Ubuntu/Linux** (Debian-based):

  ```bash
  sudo apt update
  sudo apt install git
  ```

* **Windows**:
  Download the official installer from:
  👉 [https://git-scm.com/download/win](https://git-scm.com/download/win)
  Then follow the setup wizard.
  After installation, you can use **Git Bash** or **PowerShell**.

---

#### ✅ Clone into the current directory:

```bash
git clone https://github.com/zozvn/NeutralinoJS-with-SvelteKit.git .
```

> 📌 The `.` at the end tells Git to clone the repository **into your current folder**. Make sure the folder is empty before running this command.

#### ✅ Clone into a new directory:

```bash
git clone https://github.com/zozvn/NeutralinoJS-with-SvelteKit.git <your-folder-name>
```

Example:

```bash
git clone https://github.com/zozvn/NeutralinoJS-with-SvelteKit.git my-app
```

This will create a new folder called `my-app` (or any name you choose) containing the project.

---

# Install
Bạn cần build frontend trước khi chạy Neutralino..
```
    cd frontend
    bun install
    bun run build
    cd ../
    neu update
```

# Run Application
neu run

# Build Application
neu build
