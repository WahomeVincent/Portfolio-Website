import React from 'react'

function TabButton({active, selectTab, children}) {
    const buttonClasses = active ? 'text-white border-b border-red-500' : 'text-slate-200'

  return (
    <button onClick={selectTab}>
        <p className={`${buttonClasses}`}>
            {children}
        </p>
    </button>
)
}

export default TabButton