# Design Spec: Replace Project Entry with Website Profile UKM Malaka

**Date:** 2026-09-03  
**Status:** Approved by User  

## Goal
Replace the existing "Web Tracking Progress Belajar" project entry in the portfolio website (`asset/project.js`) with the "Website Profile UKM Malaka" organization company profile website (`malakaubpkarawang.com`).

## Proposed Changes

### `asset/project.js`
Replace the 5th item in the `projects` array:

**Before:**
```javascript
{
  title: "Web Tracking Progress Belajar",
  desc: "Sistem pelacakan dan evaluasi perkembangan belajar berbasis web untuk pencatatan akademik dan pemantauan berkala.",
  icon: "fa-chart-line",
  label: "Pelacak",
  labelStyle: "text-purple-400",
  tech: ["PHP", "MySQL", "CSS", "JavaScript"],
  delay: "0.4s",
  repoUrl: "https://github.com/Noriishere/web-tracking-progress-belajar",
  liveUrl: ""
}
```

**After:**
```javascript
{
  title: "Website Profile UKM Malaka",
  desc: "Website company profile resmi untuk UKM Malaka UBP Karawang yang menyajikan informasi organisasi, kegiatan, dan profil anggota secara modern.",
  icon: "fa-users",
  label: "Company Profile",
  labelStyle: "text-emerald-400",
  tech: ["PHP", "Tailwind CSS", "JavaScript"],
  delay: "0.4s",
  repoUrl: "",
  liveUrl: "https://malakaubpkarawang.com"
}
```

## Verification
- Check `asset/project.js` for syntax correctness.
- Verify `index.html` loads projects properly without breaking layout.
