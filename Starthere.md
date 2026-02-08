# 🚀 START HERE - First Time Setup

## ⚡ Get Your Site Running in 3 Minutes!

### Step 1: Organize Files (MUST DO FIRST!)

**Choose your operating system:**

#### Windows:
```
Double-click: organize-files.bat
```

#### Mac/Linux:
```bash
chmod +x organize-files.sh
./organize-files.sh
```

✅ This creates the correct folder structure!

---

### Step 2: Install Everything

```bash
npm install
```

⏱️ Takes 1-2 minutes

---

### Step 3: Start Development

```bash
npm run dev
```

✅ **Your site opens at: http://localhost:3000**

---

## 🎯 What You Should See

✅ Purple-themed landing page  
✅ Typing animation on "intelligence"  
✅ Smooth scrolling sections  
✅ Working navigation  
✅ Contact forms  
✅ Pricing table  

---

## 🔧 If Something Doesn't Work

### Problem: "Cannot find module"
**Solution:**
```bash
# Make sure you ran the organize script!
./organize-files.bat  # Windows
./organize-files.sh   # Mac/Linux

# Then reinstall
rm -rf node_modules
npm install
```

### Problem: "Port already in use"
**Solution:** Close other programs using port 3000, or change port in `vite.config.js`

### Problem: Files not loading
**Solution:** Check that files are in correct folders:
- All `.jsx` section files → `src/sections/`
- `Navbar.jsx` → `src/components/`
- `App.jsx`, `main.jsx`, `index.css` → `src/`

---

## ✅ Next Steps

1. ✅ Site is running
2. 📝 Change company name from "Solaris" to yours
3. 🎨 Update colors if needed
4. 📧 Update contact information
5. 🚀 Deploy when ready

---

## 📚 Full Documentation

- **README.md** - Complete guide
- **DEPLOYMENT.md** - How to deploy
- **QUICK_START.md** - Quick reference

---

## 💬 Need Help?

1. Check if you ran `organize-files` script
2. Make sure Node.js 18+ is installed
3. Delete `node_modules` and run `npm install` again
4. Check the README.md file

---

**You've got this!** 🎉

Once you see the site at `localhost:3000`, you're ready to customize and deploy!