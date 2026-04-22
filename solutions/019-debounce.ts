function debounce(fn: Function, delay: number) {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    return function(...args: any[]) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

const debouncedLog = debounce(() => console.log("555"), 1000);
debouncedLog()
debouncedLog()
debouncedLog()
debouncedLog()

//mecanism de lift, cand intra o persoana noua in lift, se reseteaza timerul 