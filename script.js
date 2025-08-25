// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for fixed header
                behavior: 'smooth'
            });
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Highlight active section in navigation while scrolling
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 100; // Add offset for better UX
    
    document.querySelectorAll('.menu-section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = '#' + section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Menu translations
const translations = {
    fr: {
        language: 'English',
        title: 'Le Jardin',
        subtitle: 'Café & Crêperie',
        menuSections: {
            'Petits Déjeuners': 'Petits Déjeuners',
            'Boissons Chaudes': 'Boissons Chaudes',
            'Boissons Froides': 'Boissons Froides',
            'Café': 'Café',
            'Milkshakes': 'Milkshakes',
            'Crêpes Salées': 'Crêpes Salées',
            'Crêpes au Chocolat': 'Crêpes au Chocolat'
        },
        nav: {
            'Petits Déjeuners': 'Petits Déjeuners',
            'Boissons Chaudes': 'Boissons Chaudes',
            'Boissons Froides': 'Boissons Froides',
            'Café': 'Café',
            'Milkshakes': 'Milkshakes',
            'Crêpes Salées': 'Crêpes Salées',
            'Crêpes Chocolat': 'Crêpes Chocolat'
        },
        items: {
            // Petits Déjeuners
            'Petit Déjeuner Classique': 'Petit Déjeuner Classique',
            'Assiette Gourmande': 'Assiette Gourmande',
            // Boissons Chaudes
            'Thé à la Menthe': 'Thé à la Menthe',
            'Chocolat Chaud Maison': 'Chocolat Chaud Maison',
            // Boissons Froides
            'Jus de Fruits Frais': 'Jus de Fruits Frais',
            'Limonade Maison': 'Limonade Maison',
            // Café
            'Expresso': 'Expresso',
            'Cappuccino': 'Cappuccino',
            'Café Crème': 'Café Crème',
            // Milkshakes
            'Milkshake Vanille': 'Milkshake Vanille',
            'Milkshake Chocolat-Noisette': 'Milkshake Chocolat-Noisette',
            'Milkshake Fraise': 'Milkshake Fraise',
            // Crêpes Salées
            'Complète': 'Complète',
            'Forestière': 'Forestière',
            // Crêpes au Chocolat
            'Chocolat Classique': 'Chocolat Classique',
            'Délice Chocolat-Noisette': 'Délice Chocolat-Noisette',
            'Exotique': 'Exotique'
        },
        descriptions: {
            'Croissant, pain au chocolat, confiture, beurre, jus d\'orange, café ou thé': 'Croissant, pain au chocolat, confiture, beurre, jus d\'orange, café ou thé',
            'Œufs, fromage, jambon, olives, salade, pain complet': 'Œufs, fromage, jambon, olives, salade, pain complet',
            'Thé vert à la menthe fraîche': 'Thé vert à la menthe fraîche',
            'Chocolat noir fondu avec lait chaud': 'Chocolat noir fondu avec lait chaud',
            'Orange, pomme ou ananas': 'Orange, pomme ou ananas',
            'Préparée avec des citrons frais et menthe': 'Préparée avec des citrons frais et menthe',
            'Un concentré de café corsé': 'Un concentré de café corsé',
            'Espresso, lait chaud et mousse de lait': 'Espresso, lait chaud et mousse de lait',
            'Café allongé avec crème fraîche': 'Café allongé avec crème fraîche',
            'Crème glacée à la vanille et lait': 'Crème glacée à la vanille et lait',
            'Chocolat, noisettes et glace vanille': 'Chocolat, noisettes et glace vanille',
            'Fraises fraîches et glace à la vanille': 'Fraises fraîches et glace à la vanille',
            'Jambon, fromage, œuf': 'Jambon, fromage, œuf',
            'Champignons, crème fraîche, persil': 'Champignons, crème fraîche, persil',
            'Chocolat fondu et sucre glace': 'Chocolat fondu et sucre glace',
            'Chocolat, noisettes concassées et chantilly': 'Chocolat, noisettes concassées et chantilly',
            'Chocolat, banane et noix de coco râpée': 'Chocolat, banane et noix de coco râpée'
        },
        footer: ' 2025 Le Jardin - Tous droits réservés'
    },
    en: {
        language: 'Français',
        title: 'The Garden',
        subtitle: 'Café & Crêperie',
        menuSections: {
            'Petits Déjeuners': 'Breakfast',
            'Boissons Chaudes': 'Hot Drinks',
            'Boissons Froides': 'Cold Drinks',
            'Café': 'Coffee',
            'Milkshakes': 'Milkshakes',
            'Crêpes Salées': 'Savory Crêpes',
            'Crêpes au Chocolat': 'Chocolate Crêpes'
        },
        nav: {
            'Petits Déjeuners': 'Breakfast',
            'Boissons Chaudes': 'Hot Drinks',
            'Boissons Froides': 'Cold Drinks',
            'Café': 'Coffee',
            'Milkshakes': 'Milkshakes',
            'Crêpes Salées': 'Savory Crêpes',
            'Crêpes Chocolat': 'Chocolate Crêpes'
        },
        items: {
            // Petits Déjeuners
            'Petit Déjeuner Classique': 'Classic Breakfast',
            'Assiette Gourmande': 'Gourmet Platter',
            // Boissons Chaudes
            'Thé à la Menthe': 'Mint Tea',
            'Chocolat Chaud Maison': 'Hot Chocolate',
            // Boissons Froides
            'Jus de Fruits Frais': 'Fresh Fruit Juice',
            'Limonade Maison': 'Homemade Lemonade',
            // Café
            'Expresso': 'Espresso',
            'Cappuccino': 'Cappuccino',
            'Café Crème': 'Coffee with Cream',
            // Milkshakes
            'Milkshake Vanille': 'Vanilla Milkshake',
            'Milkshake Chocolat-Noisette': 'Chocolate-Hazelnut Milkshake',
            'Milkshake Fraise': 'Strawberry Milkshake',
            // Crêpes Salées
            'Complète': 'Complete (Ham & Cheese)',
            'Forestière': 'Forest Style (Mushrooms & Cream)',
            // Crêpes au Chocolat
            'Chocolat Classique': 'Classic Chocolate',
            'Délice Chocolat-Noisette': 'Chocolate-Hazelnut Delight',
            'Exotique': 'Exotic (Chocolate, Banana & Coconut)'
        },
        descriptions: {
            'Croissant, pain au chocolat, confiture, beurre, jus d\'orange, café ou thé': 'Croissant, chocolate bread, jam, butter, orange juice, coffee or tea',
            'Œufs, fromage, jambon, olives, salade, pain complet': 'Eggs, cheese, ham, olives, salad, whole wheat bread',
            'Thé vert à la menthe fraîche': 'Green tea with fresh mint',
            'Chocolat noir fondu avec lait chaud': 'Melted dark chocolate with hot milk',
            'Orange, pomme ou ananas': 'Orange, apple or pineapple',
            'Préparée avec des citrons frais et menthe': 'Made with fresh lemons and mint',
            'Un concentré de café corsé': 'A strong coffee concentrate',
            'Espresso, lait chaud et mousse de lait': 'Espresso, hot milk and milk foam',
            'Café allongé avec crème fraîche': 'Coffee with fresh cream',
            'Crème glacée à la vanille et lait': 'Vanilla ice cream and milk',
            'Chocolat, noisettes et glace vanille': 'Chocolate, hazelnuts and vanilla ice cream',
            'Fraises fraîches et glace à la vanille': 'Fresh strawberries and vanilla ice cream',
            'Jambon, fromage, œuf': 'Ham, cheese, egg',
            'Champignons, crème fraîche, persil': 'Mushrooms, fresh cream, parsley',
            'Chocolat fondu et sucre glace': 'Melted chocolate and powdered sugar',
            'Chocolat, noisettes concassées et chantilly': 'Chocolate, crushed hazelnuts and whipped cream',
            'Chocolat, banane et noix de coco râpée': 'Chocolate, banana and shredded coconut'
        },
        footer: '© 2025 The Garden - All rights reserved'
    }
};

// Current language (default: French)
let currentLang = 'fr';

// DOM elements
const toggleBtn = document.getElementById('toggleLanguage');
const title = document.querySelector('h1');
const subtitle = document.querySelector('.subtitle');
const menuSections = document.querySelectorAll('.menu-section');
const footer = document.querySelector('footer p');

// Toggle language function
function toggleLanguage() {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    
    // Update button text first
    const lang = translations[currentLang];
    if (toggleBtn) {
        toggleBtn.innerHTML = `<i class="fas fa-language"></i> ${lang.language}`;
    }
    
    // Then update all content including navigation
    updateContent();
}

// Update content based on current language
function updateContent() {
    const lang = translations[currentLang];
    
    // Update title and subtitle
    if (title) title.textContent = lang.title;
    if (subtitle) {
        // Update subtitle based on current language
        subtitle.textContent = currentLang === 'fr' ? 'Café & Crêperie' : 'Café & Crêperie';
    }
    
            // Navigation translations
    const navTranslations = {
        // French to English
        'Petits Déjeuners': 'Breakfast',
        'Boissons Chaudes': 'Hot Drinks',
        'Boissons Froides': 'Cold Drinks',
        'Café': 'Coffee',
        'Milkshakes': 'Milkshakes',
        'Crêpes Salées': 'Savory Crêpes',
        'Crêpes Chocolat': 'Chocolate Crêpes'
    };

    // Update navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        const originalText = link.getAttribute('data-original');
        
        if (currentLang === 'fr') {
            // Show French (original) text
            link.textContent = originalText;
        } else {
            // Show English translation
            link.textContent = navTranslations[originalText] || originalText;
        }
    });
    
    // Update menu sections
    menuSections.forEach(section => {
        const sectionTitle = section.querySelector('h2');
        if (sectionTitle) {
            const originalText = sectionTitle.getAttribute('data-original') || sectionTitle.textContent;
            sectionTitle.setAttribute('data-original', originalText);
            sectionTitle.textContent = lang.menuSections[originalText] || originalText;
        }
        
        // Update menu items
        const menuItems = section.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
            const itemTitle = item.querySelector('h3');
            const itemDesc = item.querySelector('p');
            
            if (itemTitle) {
                const originalTitle = itemTitle.getAttribute('data-original') || itemTitle.textContent;
                itemTitle.setAttribute('data-original', originalTitle);
                itemTitle.textContent = lang.items[originalTitle] || originalTitle;
            }
            
            if (itemDesc) {
                const originalDesc = itemDesc.getAttribute('data-original') || itemDesc.textContent;
                itemDesc.setAttribute('data-original', originalDesc);
                itemDesc.textContent = lang.descriptions[originalDesc] || originalDesc;
            }
        });
    });
    
    // Update footer
    if (footer) {
        footer.textContent = lang.footer;
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Add click event to the language toggle button
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleLanguage);
    }
    
    // Set initial language
    updateContent();
});
