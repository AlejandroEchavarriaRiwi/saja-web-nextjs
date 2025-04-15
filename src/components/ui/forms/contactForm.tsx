"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        toast({
          title: "Mensaje enviado",
          description: "Gracias por contactarnos. Te responderemos pronto.",
        });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        throw new Error("Error al enviar el mensaje");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <Input
        placeholder="Tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="bg-gray-100 dark:bg-gray-700"
      />
      <Input
        type="email"
        placeholder="Tu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-gray-100 dark:bg-gray-700"
      />
      <Textarea
        placeholder="Tu mensaje"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className="bg-gray-100 dark:bg-gray-700"
      />
      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-primary to-secondary hover:from-blue-700 hover:to-green-600 text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : <><Send className="mr-2 h-4 w-4" /> Enviar Mensaje</>}
      </Button>
    </form>
  );
};

export default ContactForm;