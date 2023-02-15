import React, {useMemo} from 'react'
const expensiveOperation = (param1, param2) => {
    console.log('expensive operation')
}

const memoizedValue = useMemo(()=> expensiveOperation(param1, param2), [param1, param2])