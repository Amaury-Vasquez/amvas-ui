import { useState, useEffect } from 'react';

export const useCopyableText = (text: string, time: number = 2000) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [closeTooltip, setClose] = useState(false);

  async function copyTextToClipboard() {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setIsError(false);
    } catch (error) {
      setIsError(true);
    }
  }

  async function onCopyButtonClick() {
    await copyTextToClipboard();
  }

  useEffect(() => {
    if ((isCopied || isError) && !showTooltip) setShowTooltip(true);
  }, [isCopied, isError, showTooltip, time]);

  // useEffect(() => {
  if (showTooltip && !closeTooltip) {
    setTimeout(() => {
      setClose(true);
      setIsCopied(false);
      setIsError(false);
      setTimeout(() => {
        setShowTooltip(false);
        setClose(false);
      }, 200);
    }, time);
  }
  // }, [showTooltip, closeTooltip, time]);

  return { isCopied, isError, closeTooltip, showTooltip, onCopyButtonClick };
};
