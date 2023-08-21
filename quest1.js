function solution(A) {
    const N = A.length;
    
    const increasing = new Array(N).fill(1);
    const decreasing = new Array(N).fill(1);

    // Calculate the length of the longest increasing sequence ending at each position.
    for (let i = 1; i < N; i++) {
        for (let j = 0; j < i; j++) {
            if (A[i] > A[j]) {
                increasing[i] = Math.max(increasing[i], increasing[j] + 1);
            }
        }
    }

    // Calculate the length of the longest decreasing sequence starting at each position.
    for (let i = N - 2; i >= 0; i--) {
        for (let j = N - 1; j > i; j--) {
            if (A[i] > A[j]) {
                decreasing[i] = Math.max(decreasing[i], decreasing[j] + 1);
            }
        }
    }

    let maxSpike = 0;

    // Find the maximum length of a spike by combining the increasing and decreasing sequences.
    for (let i = 0; i < N; i++) {
        maxSpike = Math.max(maxSpike, increasing[i] + decreasing[i] - 1);
    }

    return maxSpike;
}

// Tests
console.log(solution([1, 2])); 
console.log(solution([2, 5, 3, 2, 4, 1])); 
console.log(solution([2, 3, 3, 2, 2, 2, 1])); 

