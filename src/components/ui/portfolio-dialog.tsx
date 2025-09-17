import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog";
import { Button } from "./button";
import { X, Loader2 } from "lucide-react";
import { useState } from "react";
import styles from "./portfolio-dialog.module.css";

import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface PortfolioDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PortfolioDialog({ isOpen, onClose }: PortfolioDialogProps) {
  const [loading, setLoading] = useState(true);

  // Create an instance of the default layout plugin
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  // Load PDF file
  const pdfUrl = new URL('/src/assets/Seroxide_Profile (1).pdf', import.meta.url).href;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl h-[80vh]">
        <DialogHeader>
          <DialogTitle>Our Portfolio</DialogTitle>
          <DialogDescription>
            View our comprehensive portfolio and past work
          </DialogDescription>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        <div className={styles.pdfContainer}>
          {loading && (
            <div className={styles.loadingContainer}>
              <Loader2 className="h-8 w-8 animate-spin" />
              <p>Loading PDF...</p>
            </div>
          )}
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer
              fileUrl={pdfUrl}
              plugins={[defaultLayoutPluginInstance]}
              onDocumentLoad={() => setLoading(false)}
            />
          </Worker>
        </div>
      </DialogContent>
    </Dialog>
  );
}