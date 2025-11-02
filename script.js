// Min Heap with Animation
class MinHeap {
    constructor() {
        this.heap = [];
        this.animationQueue = [];
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeftChildIndex(i) {
        return 2 * i + 1;
    }

    getRightChildIndex(i) {
        return 2 * i + 2;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    async insert(value) {
        this.animationQueue.push({
            type: 'pseudocode',
            operation: 'insert',
            line: 1,
            message: `heap.push(${value})`
        });
        
        this.heap.push(value);
        
        this.animationQueue.push({
            type: 'pseudocode',
            operation: 'insert',
            line: 2,
            message: `index = ${this.heap.length - 1}`
        });
        
        this.animationQueue.push({
            type: 'insert',
            index: this.heap.length - 1,
            value: value,
            message: `Inserted ${value} at index ${this.heap.length - 1}`
        });
        
        await this.heapifyUp(this.heap.length - 1);
    }

    async heapifyUp(index) {
        let current = index;
        while (current > 0) {
            this.animationQueue.push({
                type: 'pseudocode',
                operation: 'insert',
                line: 3,
                message: `while ${current} > 0 (true, continue)`
            });
            
            let parent = this.getParentIndex(current);
            
            this.animationQueue.push({
                type: 'pseudocode',
                operation: 'insert',
                line: 4,
                message: `parent = floor((${current}-1)/2) = ${parent}`
            });
            
            this.animationQueue.push({
                type: 'pseudocode',
                operation: 'insert',
                line: 5,
                message: `if heap[${current}]=${this.heap[current]} < heap[${parent}]=${this.heap[parent]}`
            });
            
            this.animationQueue.push({
                type: 'compare',
                indices: [current, parent],
                message: `Comparing: heap[${current}]=${this.heap[current]} with parent heap[${parent}]=${this.heap[parent]}`
            });

            if (this.heap[current] < this.heap[parent]) {
                this.animationQueue.push({
                    type: 'pseudocode',
                    operation: 'insert',
                    line: 6,
                    message: `swap(heap[${current}], heap[${parent}])`
                });
                
                this.animationQueue.push({
                    type: 'swap',
                    indices: [current, parent],
                    message: `Swapping: heap[${current}]=${this.heap[current]} ↔ heap[${parent}]=${this.heap[parent]}`
                });
                
                this.swap(current, parent);
                
                this.animationQueue.push({
                    type: 'pseudocode',
                    operation: 'insert',
                    line: 7,
                    message: `index = parent = ${parent}`
                });
                
                current = parent;
            } else {
                this.animationQueue.push({
                    type: 'pseudocode',
                    operation: 'insert',
                    line: 9,
                    message: `break (heap property satisfied)`
                });
                
                this.animationQueue.push({
                    type: 'complete',
                    index: current,
                    message: `Heap property satisfied at index ${current}`
                });
                break;
            }
        }
        
        if (current === 0) {
            this.animationQueue.push({
                type: 'pseudocode',
                operation: 'insert',
                line: 3,
                message: `while ${current} > 0 (false, exit loop)`
            });
            
            this.animationQueue.push({
                type: 'complete',
                index: 0,
                message: `Reached root. Heapify up complete.`
            });
        }
    }

    async removeMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) {
            const min = this.heap.pop();
            this.animationQueue.push({
                type: 'remove',
                message: `Removed minimum: ${min}`
            });
            return min;
        }

        this.animationQueue.push({
            type: 'pseudocode',
            operation: 'remove',
            line: 1,
            message: `min = heap[0] = ${this.heap[0]}`
        });

        const min = this.heap[0];
        
        this.animationQueue.push({
            type: 'highlight',
            index: 0,
            message: `Removing minimum element: ${min}`
        });

        this.animationQueue.push({
            type: 'pseudocode',
            operation: 'remove',
            line: 2,
            message: `heap[0] = heap.pop() = ${this.heap[this.heap.length - 1]}`
        });
        
        this.heap[0] = this.heap.pop();
        
        this.animationQueue.push({
            type: 'replace',
            index: 0,
            message: `Replaced root with last element: ${this.heap[0]}`
        });

        this.animationQueue.push({
            type: 'pseudocode',
            operation: 'remove',
            line: 3,
            message: `index = 0`
        });

        await this.heapifyDown(0);
        
        this.animationQueue.push({
            type: 'pseudocode',
            operation: 'remove',
            line: 17,
            message: `return min = ${min}`
        });
        
        return min;
    }

    async heapifyDown(index) {
        let current = index;
        while (true) {
            this.animationQueue.push({
                type: 'pseudocode',
                operation: 'remove',
                line: 4,
                message: `while true (continue loop)`
            });
            
            let left = this.getLeftChildIndex(current);
            
            this.animationQueue.push({
                type: 'pseudocode',
                operation: 'remove',
                line: 5,
                message: `left = 2*${current} + 1 = ${left}`
            });
            
            let right = this.getRightChildIndex(current);
            
            this.animationQueue.push({
                type: 'pseudocode',
                operation: 'remove',
                line: 6,
                message: `right = 2*${current} + 2 = ${right}`
            });
            
            let smallest = current;
            
            this.animationQueue.push({
                type: 'pseudocode',
                operation: 'remove',
                line: 7,
                message: `smallest = ${current}`
            });

            this.animationQueue.push({
                type: 'examine',
                index: current,
                message: `Examining node at index ${current} (value: ${this.heap[current]})`
            });

            if (left < this.heap.length) {
                this.animationQueue.push({
                    type: 'pseudocode',
                    operation: 'remove',
                    line: 8,
                    message: `if ${left} < ${this.heap.length} AND heap[${left}]=${this.heap[left]} < heap[${smallest}]=${this.heap[smallest]}`
                });
                
                this.animationQueue.push({
                    type: 'compare',
                    indices: [smallest, left],
                    message: `Comparing with left child: heap[${left}]=${this.heap[left]}`
                });

                if (this.heap[left] < this.heap[smallest]) {
                    smallest = left;
                    
                    this.animationQueue.push({
                        type: 'pseudocode',
                        operation: 'remove',
                        line: 9,
                        message: `smallest = left = ${left}`
                    });
                }
            }

            if (right < this.heap.length) {
                this.animationQueue.push({
                    type: 'pseudocode',
                    operation: 'remove',
                    line: 10,
                    message: `if ${right} < ${this.heap.length} AND heap[${right}]=${this.heap[right]} < heap[${smallest}]=${this.heap[smallest]}`
                });
                
                this.animationQueue.push({
                    type: 'compare',
                    indices: [smallest, right],
                    message: `Comparing with right child: heap[${right}]=${this.heap[right]}`
                });

                if (this.heap[right] < this.heap[smallest]) {
                    smallest = right;
                    
                    this.animationQueue.push({
                        type: 'pseudocode',
                        operation: 'remove',
                        line: 11,
                        message: `smallest = right = ${right}`
                    });
                }
            }

            this.animationQueue.push({
                type: 'pseudocode',
                operation: 'remove',
                line: 12,
                message: `if smallest(${smallest}) != index(${current})`
            });

            if (smallest !== current) {
                this.animationQueue.push({
                    type: 'pseudocode',
                    operation: 'remove',
                    line: 13,
                    message: `swap(heap[${current}], heap[${smallest}])`
                });
                
                this.animationQueue.push({
                    type: 'swap',
                    indices: [current, smallest],
                    message: `Swapping: heap[${current}]=${this.heap[current]} ↔ heap[${smallest}]=${this.heap[smallest]}`
                });
                
                this.swap(current, smallest);
                
                this.animationQueue.push({
                    type: 'pseudocode',
                    operation: 'remove',
                    line: 14,
                    message: `index = smallest = ${smallest}`
                });
                
                current = smallest;
            } else {
                this.animationQueue.push({
                    type: 'pseudocode',
                    operation: 'remove',
                    line: 16,
                    message: `break (heap property satisfied)`
                });
                
                this.animationQueue.push({
                    type: 'complete',
                    index: current,
                    message: `Heap property satisfied. Heapify down complete.`
                });
                break;
            }
        }
    }

    clear() {
        this.heap = [];
        this.animationQueue = [];
    }

    size() {
        return this.heap.length;
    }

    getArray() {
        return [...this.heap];
    }

    buildHeapFromArray(arr) {
        this.heap = [...arr];
        this.animationQueue.push({
            type: 'info',
            message: `Building heap from array...`
        });
        
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.animationQueue.push({
                type: 'info',
                message: `Heapifying subtree at index ${i}`
            });
            this.heapifyDownSync(i);
        }
        
        this.animationQueue.push({
            type: 'complete',
            message: `Build heap complete!`
        });
    }

    heapifyDownSync(index) {
        let current = index;
        while (true) {
            let left = this.getLeftChildIndex(current);
            let right = this.getRightChildIndex(current);
            let smallest = current;

            if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }

            if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if (smallest !== current) {
                this.animationQueue.push({
                    type: 'swap',
                    indices: [current, smallest],
                    message: `Swapping: heap[${current}]=${this.heap[current]} ↔ heap[${smallest}]=${this.heap[smallest]}`
                });
                
                this.swap(current, smallest);
                current = smallest;
            } else {
                break;
            }
        }
    }
}

// Global variables
let heap = new MinHeap();
let canvas, ctx;
let isAnimating = false;
let shouldSkipAnimation = false;
let animationSpeed = 800;

// Initialize
window.onload = function() {
    canvas = document.getElementById('heapCanvas');
    ctx = canvas.getContext('2d');
    
    // Setup speed slider
    const speedSlider = document.getElementById('speedSlider');
    const speedValue = document.getElementById('speedValue');
    
    speedSlider.addEventListener('input', function() {
        animationSpeed = parseInt(this.value);
        speedValue.textContent = animationSpeed + 'ms';
        
        // Visual feedback
        speedValue.style.fontWeight = 'bold';
        speedValue.style.color = '#f57c00';
        setTimeout(() => {
            speedValue.style.fontWeight = 'normal';
            speedValue.style.color = 'inherit';
        }, 300);
    });
    
    updateDisplay();
};

// Disable controls during animation
function setControlsEnabled(enabled) {
    const buttons = document.querySelectorAll('.controls button');
    const input = document.getElementById('valueInput');
    buttons.forEach(btn => btn.disabled = !enabled);
    input.disabled = !enabled;
    document.getElementById('skipBtn').disabled = enabled;
}

// Insert element
async function insert() {
    const input = document.getElementById('valueInput');
    const value = parseInt(input.value);

    if (isNaN(value)) {
        updateInfo('Please enter a valid number');
        return;
    }

    if (isAnimating) {
        updateInfo('Animation in progress. Please wait.');
        return;
    }

    input.value = '';
    setControlsEnabled(false);
    isAnimating = true;
    shouldSkipAnimation = false;

    heap.animationQueue = [];
    await heap.insert(value);
    await playAnimations();

    isAnimating = false;
    setControlsEnabled(true);
    updateInfo(`Successfully inserted ${value}`);
}

// Remove minimum element
async function removeMin() {
    if (isAnimating) {
        updateInfo('Animation in progress. Please wait.');
        return;
    }

    if (heap.size() === 0) {
        updateInfo('Heap is empty');
        return;
    }

    setControlsEnabled(false);
    isAnimating = true;
    shouldSkipAnimation = false;

    heap.animationQueue = [];
    const min = await heap.removeMin();

    await playAnimations();

    isAnimating = false;
    setControlsEnabled(true);
    updateInfo(`Removed minimum element: ${min}`);
}

// Clear heap
function clearHeap() {
    if (isAnimating) {
        shouldSkipAnimation = true;
        return;
    }
    
    heap.clear();
    resetPseudocode();
    updateInfo('Heap cleared');
    updateDisplay();
}

// Build heap
async function buildHeap() {
    if (isAnimating) {
        updateInfo('Animation in progress. Please wait.');
        return;
    }

    const currentArray = heap.getArray();
    if (currentArray.length === 0) {
        updateInfo('Heap is empty. Add some elements first.');
        return;
    }

    setControlsEnabled(false);
    isAnimating = true;
    shouldSkipAnimation = false;

    heap.animationQueue = [];
    heap.buildHeapFromArray(currentArray);
    await playAnimations();

    isAnimating = false;
    setControlsEnabled(true);
    updateInfo('Heap rebuilt successfully');
}

// Skip animation
function skipAnimation() {
    shouldSkipAnimation = true;
    updateInfo('Skipping to final result...');
}

// Play animation queue
async function playAnimations() {
    for (let i = 0; i < heap.animationQueue.length; i++) {
        if (shouldSkipAnimation) {
            // Immediately show final state
            updateDisplay();
            resetPseudocode();
            updateInfo('Animation skipped - showing final result');
            break;
        }

        const step = heap.animationQueue[i];
        await animateStep(step);
        
        // Only sleep if not the pseudocode step (for faster execution)
        if (step.type !== 'pseudocode') {
            await sleep(animationSpeed / 2);
        } else {
            await sleep(animationSpeed);
        }
    }
    
    if (!shouldSkipAnimation) {
        // Clear highlights
        updateDisplay();
        
        // Reset pseudocode after a delay
        setTimeout(() => {
            resetPseudocode();
        }, animationSpeed);
    }
}

// Animate a single step
async function animateStep(step) {
    // Handle pseudocode highlighting
    if (step.type === 'pseudocode') {
        showPseudocode(step.operation);
        highlightPseudocodeLine(step.operation, step.line);
        updateInfo(step.message);
        return;
    }

    switch (step.type) {
        case 'compare':
            highlightArrayCells(step.indices, 'comparing');
            highlightTreeNodes(step.indices, '#81d4fa');
            break;
        case 'swap':
            highlightArrayCells(step.indices, 'swapping');
            highlightTreeNodes(step.indices, '#ff8a80');
            break;
        case 'highlight':
            highlightArrayCells([step.index], 'highlight');
            highlightTreeNodes([step.index], '#ffeb3b');
            break;
        case 'insert':
            highlightArrayCells([step.index], 'highlight');
            highlightTreeNodes([step.index], '#ffeb3b');
            break;
        case 'replace':
            highlightArrayCells([step.index], 'highlight');
            highlightTreeNodes([step.index], '#ffeb3b');
            break;
        case 'complete':
            if (step.index !== undefined) {
                highlightArrayCells([step.index], 'highlight');
                highlightTreeNodes([step.index], '#a5d6a7');
            }
            break;
    }

    updateDisplay(step.indices);
}

// Sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Show pseudocode for operation
function showPseudocode(operation) {
    // Hide all pseudocode sections
    document.getElementById('insertCode').style.display = 'none';
    document.getElementById('removeCode').style.display = 'none';
    document.getElementById('idleCode').style.display = 'none';
    
    // Show the appropriate pseudocode
    if (operation === 'insert') {
        document.getElementById('insertCode').style.display = 'block';
    } else if (operation === 'remove') {
        document.getElementById('removeCode').style.display = 'block';
    }
}

// Highlight pseudocode line
function highlightPseudocodeLine(operation, lineNumber) {
    // Get the appropriate code section
    const codeSection = operation === 'insert' 
        ? document.getElementById('insertCode') 
        : document.getElementById('removeCode');
    
    if (!codeSection) return;
    
    // Remove all highlights
    const allLines = codeSection.querySelectorAll('.line');
    allLines.forEach(line => {
        line.classList.remove('active');
        line.classList.add('completed');
    });
    
    // Highlight the current line
    const currentLine = codeSection.querySelector(`[data-line="${lineNumber}"]`);
    if (currentLine) {
        currentLine.classList.remove('completed');
        currentLine.classList.add('active');
        
        // Scroll into view if needed
        currentLine.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// Reset pseudocode display
function resetPseudocode() {
    document.getElementById('insertCode').style.display = 'none';
    document.getElementById('removeCode').style.display = 'none';
    document.getElementById('idleCode').style.display = 'block';
    
    // Remove all highlights
    document.querySelectorAll('.line').forEach(line => {
        line.classList.remove('active', 'completed');
    });
}

// Highlight array cells
function highlightArrayCells(indices, className) {
    // Remove all highlights first
    document.querySelectorAll('.array-cell').forEach(cell => {
        cell.classList.remove('highlight', 'comparing', 'swapping');
    });

    // Add new highlights
    if (indices) {
        indices.forEach(index => {
            const cells = document.querySelectorAll('.array-cell');
            if (cells[index]) {
                cells[index].classList.add(className);
            }
        });
    }
}

// Update all displays
function updateDisplay(highlightIndices = null) {
    displayArray(highlightIndices);
    drawHeapTree(highlightIndices);
}

// Display array representation
function displayArray(highlightIndices = null) {
    const arrayDisplay = document.getElementById('arrayDisplay');
    const arr = heap.getArray();

    if (arr.length === 0) {
        arrayDisplay.innerHTML = '<div style="color: #999; padding: 20px;">Array is empty</div>';
        return;
    }

    arrayDisplay.innerHTML = '';
    
    // Create rows of cells (10 per row for better layout)
    let rowDiv = document.createElement('div');
    rowDiv.className = 'array-row';
    
    arr.forEach((value, index) => {
        if (index > 0 && index % 10 === 0) {
            arrayDisplay.appendChild(rowDiv);
            rowDiv = document.createElement('div');
            rowDiv.className = 'array-row';
        }
        
        const cell = document.createElement('div');
        cell.className = 'array-cell';
        cell.innerHTML = `<span class="array-index">[${index}]</span>${value}`;
        
        if (highlightIndices && highlightIndices.includes(index)) {
            cell.classList.add('highlight');
        }
        
        rowDiv.appendChild(cell);
    });
    
    arrayDisplay.appendChild(rowDiv);
}

// Draw heap tree on canvas
function drawHeapTree(highlightIndices = null) {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const arr = heap.getArray();
    if (arr.length === 0) {
        ctx.font = '18px Arial';
        ctx.fillStyle = '#999';
        ctx.textAlign = 'center';
        ctx.fillText('Tree visualization will appear here', canvas.width / 2, canvas.height / 2);
        return;
    }

    // Calculate tree dimensions
    const nodeRadius = 25;
    const levelHeight = 90;
    const startY = 50;

    // Calculate positions for all nodes
    const positions = calculatePositions(arr.length, canvas.width, startY, levelHeight);

    // Draw connections first
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    
    for (let i = 0; i < arr.length; i++) {
        const leftChild = 2 * i + 1;
        const rightChild = 2 * i + 2;

        if (leftChild < arr.length) {
            drawLine(positions[i], positions[leftChild]);
        }
        if (rightChild < arr.length) {
            drawLine(positions[i], positions[rightChild]);
        }
    }

    // Draw nodes
    for (let i = 0; i < arr.length; i++) {
        const isHighlighted = highlightIndices && highlightIndices.includes(i);
        drawNode(positions[i].x, positions[i].y, arr[i], nodeRadius, isHighlighted, i);
    }
}

// Calculate positions for nodes
function calculatePositions(size, canvasWidth, startY, levelHeight) {
    const positions = [];
    const levels = Math.floor(Math.log2(size)) + 1;

    for (let i = 0; i < size; i++) {
        const level = Math.floor(Math.log2(i + 1));
        const positionInLevel = i - (Math.pow(2, level) - 1);
        const nodesInLevel = Math.pow(2, level);
        
        const levelWidth = canvasWidth - 100;
        const spacing = levelWidth / (nodesInLevel + 1);
        
        const x = 50 + spacing * (positionInLevel + 1);
        const y = startY + level * levelHeight;

        positions.push({ x, y });
    }

    return positions;
}

// Draw a line between two positions
function drawLine(pos1, pos2) {
    ctx.beginPath();
    ctx.moveTo(pos1.x, pos1.y);
    ctx.lineTo(pos2.x, pos2.y);
    ctx.stroke();
}

// Draw a node
function drawNode(x, y, value, radius, isHighlighted, index) {
    // Draw circle with highlight if needed
    ctx.fillStyle = isHighlighted ? '#ffeb3b' : 'white';
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.strokeStyle = isHighlighted ? '#f57f17' : '#333';
    ctx.lineWidth = isHighlighted ? 3 : 2;
    ctx.stroke();

    // Draw value
    ctx.fillStyle = '#000';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(value.toString(), x, y);

    // Draw index below node
    ctx.font = '11px Arial';
    ctx.fillStyle = '#666';
    ctx.fillText(`[${index}]`, x, y + radius + 12);
}

// Highlight tree nodes
function highlightTreeNodes(indices, color) {
    // This will be handled by drawHeapTree with highlightIndices parameter
}

// Update info message
function updateInfo(message) {
    const infoBar = document.getElementById('info');
    infoBar.innerHTML = `<strong>Status:</strong> ${message}`;
    
    // Trigger animation
    infoBar.style.animation = 'none';
    setTimeout(() => {
        infoBar.style.animation = 'statusFade 0.3s ease-in';
    }, 10);
}

// Allow Enter key to insert
document.getElementById('valueInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        insert();
    }
});
