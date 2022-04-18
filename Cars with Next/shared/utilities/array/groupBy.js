const groupBy = (array, getKey) =>
{
    const map = new Map()

    array.forEach((item) =>
    {
        const key = getKey(item)
        const collection = map.get(key)

        if (!collection) map.set(key, [item])
        else collection.push(item)
    });

    return Array.from(map, ([key, value]) => ({ key, value }))
}

export default groupBy
