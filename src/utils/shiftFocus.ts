const shiftFocus = () => {
  const chipList = document.getElementById('chipList')
  if (chipList && chipList.children.length >= 2) {
    const LastChip = chipList.children[chipList.children.length - 2]
    console.log(LastChip)
    if (LastChip instanceof HTMLElement) {
      LastChip.focus()
    }
  }
}

const shiftFocusChip = () => {
    const chipList = document.getElementById('chipList')
    if (chipList && chipList.children.length >= 2) {
      const LastChip = chipList.children[chipList.children.length - 3]
      console.log(LastChip)
      if (LastChip instanceof HTMLElement) {
        LastChip.focus()
      }
    }
  }

export {shiftFocus, shiftFocusChip}