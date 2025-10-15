// Custom Cursor Track Animation
(function() {
    'use strict';
    
    // Check if device is touch-enabled - disable cursor on mobile
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        document.body.style.cursor = 'auto';
        return;
    }
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCursor);
    } else {
        initCursor();
    }
    
    function initCursor() {
        // Create cursor elements
        const cursorDot = document.createElement('div');
        const cursorOutline = document.createElement('div');
        
        cursorDot.className = 'cursor-dot';
        cursorOutline.className = 'cursor-outline';
        
        document.body.appendChild(cursorDot);
        document.body.appendChild(cursorOutline);
        
        // Cursor position variables
        let mouseX = 0;
        let mouseY = 0;
        let outlineX = 0;
        let outlineY = 0;
        
        // Update cursor dot position instantly on mouse move
        document.addEventListener('mousemove', function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Dot follows cursor immediately
            cursorDot.style.left = mouseX + 'px';
            cursorDot.style.top = mouseY + 'px';
        });
        
        // Smooth outline animation with delay
        function animateOutline() {
            // Easing factor - lower = smoother/slower follow (0.1 - 0.3 recommended)
            const ease = 0.15;
            
            // Calculate distance to mouse
            const distX = mouseX - outlineX;
            const distY = mouseY - outlineY;
            
            // Move outline towards mouse position
            outlineX += distX * ease;
            outlineY += distY * ease;
            
            cursorOutline.style.left = outlineX + 'px';
            cursorOutline.style.top = outlineY + 'px';
            
            requestAnimationFrame(animateOutline);
        }
        
        // Start animation loop
        animateOutline();
        
        // Add hover effect on interactive elements
        const interactiveSelectors = 
            'a, button, input, textarea, select, ' +
            '[role="button"], .clickable';
        
        function updateInteractiveElements() {
            const interactiveElements = document.querySelectorAll(interactiveSelectors);
            
            interactiveElements.forEach(element => {
                // Remove old listeners to avoid duplicates
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
                
                // Add new listeners
                element.addEventListener('mouseenter', handleMouseEnter);
                element.addEventListener('mouseleave', handleMouseLeave);
            });
        }
        
        function handleMouseEnter() {
            cursorDot.classList.add('hover');
            cursorOutline.classList.add('hover');
        }
        
        function handleMouseLeave() {
            cursorDot.classList.remove('hover');
            cursorOutline.classList.remove('hover');
        }
        
        // Initialize interactive elements
        updateInteractiveElements();
        
        // Re-scan for new interactive elements periodically (useful for dynamic content)
        setInterval(updateInteractiveElements, 2000);
        
        // Add click effect
        document.addEventListener('mousedown', function() {
            cursorDot.classList.add('click');
            cursorOutline.classList.add('click');
        });
        
        document.addEventListener('mouseup', function() {
            cursorDot.classList.remove('click');
            cursorOutline.classList.remove('click');
        });
        
        // Hide custom cursor when leaving the window
        document.addEventListener('mouseleave', function() {
            cursorDot.style.opacity = '0';
            cursorOutline.style.opacity = '0';
        });
        
        document.addEventListener('mouseenter', function() {
            cursorDot.style.opacity = '1';
            cursorOutline.style.opacity = '1';
        });
        
        // Initialize cursor as hidden
        cursorDot.style.opacity = '0';
        cursorOutline.style.opacity = '0';
        
        // Show cursor after first movement
        let hasMovedOnce = false;
        document.addEventListener('mousemove', function() {
            if (!hasMovedOnce) {
                cursorDot.style.opacity = '1';
                cursorOutline.style.opacity = '1';
                hasMovedOnce = true;
            }
        }, { once: true });
    }
})();