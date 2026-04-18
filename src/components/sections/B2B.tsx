import { type FormEvent, useState } from 'react';
import { Palette, Layers, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
import SectionHeading from './SectionHeading';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useIsMobile } from '@/hooks/use-is-mobile';

const SELLING_POINTS = [
  {
    icon: Palette,
    title: 'Individuelles Branding',
    description:
      'Dein Logo, deine Farben, deine Botschaft — wir passen alles auf deinen Auftritt an.',
  },
  {
    icon: Layers,
    title: 'Bulk-Bestellungen ab 10 Stück',
    description:
      'Ob 10 oder 1.000 Boxen — wir skalieren mit dir. Attraktive Staffelpreise inklusive.',
  },
  {
    icon: MessageCircle,
    title: 'Persönliche Beratung',
    description:
      'Ein Ansprechpartner, der versteht, was du brauchst — von der ersten Anfrage bis zur Lieferung.',
  },
];

function ContactForm({ onSuccess }: { onSuccess: () => void }) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSuccess();
    toast.success('Anfrage erhalten!', {
      description: 'Wir melden uns innerhalb von 24 Stunden bei dir.',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4 px-6 pb-6 md:p-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="b2b-name">Name</Label>
          <Input id="b2b-name" name="name" required placeholder="Max Mustermann" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="b2b-company">Firma</Label>
          <Input id="b2b-company" name="company" required placeholder="Acme GmbH" />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="b2b-email">E-Mail</Label>
        <Input id="b2b-email" name="email" type="email" required placeholder="max@acme.de" />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="b2b-quantity">Menge</Label>
        <Select name="quantity" required>
          <SelectTrigger id="b2b-quantity">
            <SelectValue placeholder="Bitte wählen" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10-25">10–25 Boxen</SelectItem>
            <SelectItem value="26-50">26–50 Boxen</SelectItem>
            <SelectItem value="51-100">51–100 Boxen</SelectItem>
            <SelectItem value="100+">Über 100 Boxen</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="b2b-message">Nachricht (optional)</Label>
        <Textarea
          id="b2b-message"
          name="message"
          placeholder="Anlass, Zeitrahmen, besondere Wünsche..."
        />
      </div>
      <Button type="submit" className="mt-2 w-full">
        Anfrage senden
      </Button>
    </form>
  );
}

export default function B2B() {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <section
      id="b2b"
      className="relative z-10 bg-white py-32 md:py-48 px-6 border-t border-black/5"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          kicker="Für Unternehmen"
          title={
            <>
              Mitarbeiter &amp; Kunden <em>begeistern</em> — mit Bitcoin.
            </>
          }
          subtitle="Bitcoin als Firmengeschenk ist unvergesslich. Kein Kugelschreiber. Kein Obstkorb. Etwas, das wirklich bleibt."
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {SELLING_POINTS.map((p) => {
            const Icon = p.icon;
            return (
              <Card key={p.title} className="items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/5">
                  <Icon className="h-5 w-5 text-black" strokeWidth={1.5} />
                </div>
                <h3
                  className="font-display text-2xl sm:text-3xl text-black"
                  style={{ letterSpacing: '-0.5px' }}
                >
                  {p.title}
                </h3>
                <p className="font-sans text-sm text-[#6F6F6F] leading-relaxed">{p.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <Button size="lg" onClick={() => setOpen(true)}>
            Jetzt anfragen
          </Button>
        </div>
      </div>

      {!isMobile && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Firmenanfrage stellen</DialogTitle>
              <DialogDescription>
                Erzähl uns kurz von deinem Vorhaben. Wir melden uns innerhalb von 24 Stunden.
              </DialogDescription>
            </DialogHeader>
            <ContactForm onSuccess={() => setOpen(false)} />
          </DialogContent>
        </Dialog>
      )}

      {isMobile && (
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Firmenanfrage stellen</DrawerTitle>
              <DrawerDescription>
                Erzähl uns kurz von deinem Vorhaben. Wir melden uns innerhalb von 24 Stunden.
              </DrawerDescription>
            </DrawerHeader>
            <ContactForm onSuccess={() => setOpen(false)} />
          </DrawerContent>
        </Drawer>
      )}
    </section>
  );
}
