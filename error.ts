function CheckValue(value: number) {
    if(value == -1) {
        throw new Error("値が-1なのでエラーです");
    }
}
try {
    CheckValue(-1);
} catch (error) {
    console.error(error.message);
}