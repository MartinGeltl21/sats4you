import { Toaster as SonnerToaster } from 'sonner';

export function Toaster() {
  return (
    <SonnerToaster
      position="bottom-right"
      toastOptions={{
        classNames: {
          toast:
            'rounded-2xl border border-black/10 bg-white text-black shadow-lg font-sans',
          title: 'font-display text-base',
          description: 'text-[#6F6F6F] text-sm',
        },
      }}
    />
  );
}
