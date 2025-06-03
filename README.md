# **Project Introduction – NeutralinoJS + SvelteKit Starter**

![Neutralino + SvelteKit Preview](https://raw.githubusercontent.com/zozvn/NeutralinoJS-with-SvelteKit/main/neutralino-with-sveltekit.jpg)

Before getting started, make sure you have **Node.js** and **NeutralinoJS** installed on your system.

This project combines the simplicity of **NeutralinoJS** for lightweight desktop applications with the power of **SvelteKit** for building dynamic frontend interfaces.

While you can use standard `npm` or `npx` to build and run the SvelteKit frontend, I highly recommend giving **Bun** a try — it's incredibly fast and works seamlessly with modern JS tooling. However, Bun is **completely optional** and not a requirement.

> In short: Node is required, Bun is optional — but once you try it, you might not want to go back 😉

---

## 🧰 How to Clone This Project Using Git

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

#### Install
Bạn cần build frontend trước khi chạy Neutralino..
```
    cd frontend
    bun install
    bun run build
    cd ../
    neu update
```

#### Run Application
```
  neu run
```

#### Build Application
```
neu build
```
---

This project is a lightweight, portable desktop application built using **NeutralinoJS** for the backend runtime and **SvelteKit** for the modern frontend framework. It is designed as a **personal portfolio** or a **project showcase application**, enabling developers or businesses to present their work in a clean, performant, and cross-platform way.

### 💡 Key Highlights:

* ⚙️ **NeutralinoJS** provides a native-like desktop experience without heavy dependencies like Electron.
* ⚡ **SvelteKit** delivers lightning-fast UI performance with static site generation.
* 📁 All content can be bundled into a single `.neu` binary, making deployment and distribution simple.
* 🧩 The application structure supports easy extension (e.g. custom helpers or system integrations).
* 🖥️ Runs smoothly on **Windows, macOS, and Linux**.

### 🔧 Developer Notes

To get started, make sure you have:

* Node.js (recommended version: LTS)
* NeutralinoJS CLI (`neu`)
* \[Optional] **Bun** — for faster dev/build workflow with SvelteKit (can be replaced with npm/npx)

This architecture ensures maximum flexibility while maintaining minimal system footprint — an ideal choice for showcasing creative or technical work to clients or stakeholders.
