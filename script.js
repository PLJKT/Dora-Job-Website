// Mock data - Replace with Google Sheets/Airtable later
const jobsData = [
    {
        id: 1,
        title: "Full Stack Developer",
        department: "Technology",
        location: "Jakarta",
        type: "Full-time",
        description: "Membangun aplikasi web modern dengan React dan Node.js"
    },
    {
        id: 2,
        title: "Digital Marketing Specialist",
        department: "Marketing", 
        location: "Remote",
        type: "Full-time",
        description: "Mengelola kampanye digital dan analisis performa"
    },
    {
        id: 3,
        title: "Customer Success Manager",
        department: "Customer Service",
        location: "Surabaya", 
        type: "Full-time",
        description: "Memastikan kepuasan pelanggan dan retensi"
    }
];

// Load jobs onto page
// 替换原来的loadJobs函数
function loadJobs() {
    const container = document.getElementById('jobs-container');
    console.log('Container:', container);
    
    if (!container) {
        console.error('Jobs container not found!');
        return;
    }
    
    jobsData.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <div class="job-meta">
                <span>📊 ${job.department}</span>
                <span>📍 ${job.location}</span>
                <span>⏰ ${job.type}</span>
            </div>
            <p>${job.description}</p>
            <button class="apply-button" onclick="applyJob(${job.id})">Lamar Sekarang</button>
        `;
        container.appendChild(jobCard);
    });
    
    console.log('Jobs loaded:', jobsData.length);
}

// Simple apply function (can be enhanced with Netlify Forms)
function applyJob(jobId) {
    const job = jobsData.find(j => j.id === jobId);
    alert(`Mengarahkan ke formulir lamaran untuk: ${job.title}`);
    // In production: redirect to application form
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', loadJobs);

// 调试代码 - 添加到script.js最后
console.log('=== DEBUG INFO ===');
console.log('Script loaded:', typeof loadJobs);
console.log('Jobs data:', jobsData);
console.log('Container element:', document.getElementById('jobs-container'));

// 确保页面完全加载后执行
window.addEventListener('load', function() {
    console.log('Page fully loaded');
    loadJobs();
});



