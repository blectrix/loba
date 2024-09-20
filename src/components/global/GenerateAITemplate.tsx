import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { LayoutGrid, Loader2Icon } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';
import { chatSession } from '@/config/GoogleAIModel';

interface GenerateAITemplateProps {
  setGenerateAIOutput: (output: any) => void;
}

function GenerateAITemplate({ setGenerateAIOutput }: GenerateAITemplateProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const GenerateFromAI = async (): Promise<void> => {
    setLoading(true);
    const PROMPT = 'Generate template for editor.js in JSON for ' + userInput;
    try {
      const result = await chatSession.sendMessage(PROMPT);
      const resultText = result.response.text();
      console.log(resultText);
      const output = JSON.parse(resultText);
      setGenerateAIOutput(output);
    } catch (e) {
      console.error('Error generating AI template:', e);
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <div>
      <Button variant="outline" className="flex gap-2" onClick={() => setOpen(true)}>
        <LayoutGrid className='h-4 w-4'/>
        Generate AI Template
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Generate AI Template</DialogTitle>
            <DialogDescription>
              <div>
                <h2 className='mt-5'>What do you want to write in the document?</h2>
                <Input 
                  placeholder="Ex. Project Idea" 
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserInput(event.target.value)}
                />
                <div className='mt-5 flex gap-5 justify-top'>
                  <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
                  <Button 
                    variant="default"
                    disabled={!userInput || loading} 
                    onClick={GenerateFromAI}
                  >
                    {loading ? <Loader2Icon className='animate-spin'/> : 'Generate'}
                  </Button>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default GenerateAITemplate;