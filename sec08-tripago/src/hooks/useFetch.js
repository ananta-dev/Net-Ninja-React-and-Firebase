import { useState, useEffect, useCallback } from "react";

export const useFetch = url => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    // useEffect will run the function passed as first argument the first time the component is rendered or the Hook is called,
    // and every time any of the dependencies (in the list passed as 2nd argument) has changed

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            setIsPending(true);

            try {
                const response = await fetch(url, {
                    signal: controller.signal,
                });
                if (!response.ok) {
                    throw new Error(
                        `status: ${response.status} - statusText: ${response.statusText}`
                    );
                }
                const json = await response.json();
                setIsPending(false);
                setData(json);
                setError(null);
            } catch (err) {
                if (err.name === "AbortError") {
                    console.log("the fetch was aborted");
                } else {
                    setIsPending(false);
                    setError("Could not fetch the data");
                    console.log(err.message);
                }
            }
        };

        fetchData();

        return () => {
            controller.abort();
        };
    }, [url]);

    return { data, isPending, error };
};

// Another way to do it, with useCallback_
// import { useState, useEffect, useCallback } from "react";

// export const useFetch = url => {
//     const [data, setData] = useState(null);

//     // useEffect will run the function passed as first argument the first time the component is rendered or the Hook is called,
//     // and every time any of the dependencies (in the list passed as 2nd argument) has changed

//     const fetchData = useCallback(async () => {
//         const response = await fetch(url);
//         const json = await response.json();
//         setData(json);
//     }, [url]);

//     useEffect(() => {
//         fetchData();
//     }, [fetchData]);

//     return { data };
// };
