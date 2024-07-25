document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('announcement-banner');
    const closeBanner = document.getElementById('close-banner');

    const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    if (today >= 1 && today <= 3) {
        banner.style.display = 'block';
    }

    closeBanner.addEventListener('click', () => {
        banner.style.display = 'none';
    });

    const members = [
        {
            "name": "Hari Prasad",
            "address": "Anapurna, Nepal",
            "phoneNo": "9864125489",
            "imgUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            "memLevel": "gold",
            "description": "The only limit to our realization of tomorrow is our doubts of today."
        },
        {
            "name": "Chor Bahadur",
            "address": "Anapurna, Nepal",
            "phoneNo": "9845236157",
            "imgUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            "memLevel": "silver",
            "description": "In the middle of every difficulty lies opportunity."
        },
        {
            "name": "Kamala Katuwal",
            "address": "Anapurna, Nepal",
            "phoneNo": "9845236145",
            "imgUrl": "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            "memLevel": "bronze",
            "description": "Success is not final, failure is not fatal: It is the courage to continue that counts."
        },
        {
            "name": "Bik Bahadur",
            "address": "Anapurna, Nepal",
            "phoneNo": "9854123657",
            "imgUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            "memLevel": "gold",
            "description": "The only way to do great work is to love what you do."
        },
        {
            "name": "Dili Ram",
            "address": "Anapurna, Nepal",
            "phoneNo": "9845236157",
            "imgUrl": "https://images.unsplash.com/photo-1548946526-f69e2424cf45?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            "memLevel": "silver",
            "description": "Believe you can and you're halfway there."
        }
    ];

    const spotlightSection = document.getElementById('spotlight-section');
    const spotlightMembers = members.filter(member => member.memLevel === 'gold' || member.memLevel === 'silver').slice(0, 3);

    spotlightMembers.forEach(member => {
        const card = document.createElement('div');
        card.className = 'spotlight-card';
        card.innerHTML = `
            <img src="${member.imgUrl}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.description}</p>
        `;
        spotlightSection.appendChild(card);
    });
});