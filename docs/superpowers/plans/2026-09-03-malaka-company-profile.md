# Replace Web Tracking Progress Belajar with UKM Malaka Company Profile Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the "Web Tracking Progress Belajar" entry in `asset/project.js` with "Website Profile UKM Malaka".

**Architecture:** Update the Javascript project list object in `asset/project.js` which dynamically populates the portfolio's project section.

**Tech Stack:** JavaScript, HTML5, FontAwesome, Tailwind CSS

## Global Constraints
- Update target object in `asset/project.js` at index 4 (5th item).
- Do not create a git commit automatically (user requested to handle commit manually).

---

### Task 1: Update Project Entry in asset/project.js

**Files:**
- Modify: `asset/project.js:46-56`

**Interfaces:**
- Consumes: Existing `projects` array structure in `asset/project.js`.
- Produces: Updated `projects` array with UKM Malaka profile entry.

- [ ] **Step 1: Edit asset/project.js**

Replace the 5th project object (lines 46-56) with:
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
  },
```

- [ ] **Step 2: Verification**

Verify JavaScript syntax and check that `project.js` exports/defines `projects` correctly without syntax errors.
