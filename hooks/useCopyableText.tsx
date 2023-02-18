import { useState } from 'react';

export const useCopyableText = (text: string) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isCopying, setIsCopying] = useState(false);

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
    setIsCopying(true);
    await copyTextToClipboard();
    setIsCopying(false);
  }

  return { isCopied, isCopying, isError, onCopyButtonClick };
};
