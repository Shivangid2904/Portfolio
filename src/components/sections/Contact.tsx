import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, FileText } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { meta } from '../../data/meta'

const contacts = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: meta.linkedin,
    description: 'Let\'s connect professionally',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: meta.github,
    description: 'See what I\'m building',
  },
  {
    icon: Mail,
    label: 'Email',
    href: `mailto:${meta.email}`,
    description: meta.email,
  },
  {
    icon: FileText,
    label: 'Resume',
    href: meta.resume,
    description: 'Download my resume',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6" aria-label="Contact">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading
          title="Say Hello"
          accent="✦ contact"
          align="center"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-body text-base text-lavender/55 leading-relaxed mb-12 max-w-lg mx-auto"
        >
          Have a question, a strange project idea, or just want to talk about ML, data,
          cloud systems, or space? I'd love to hear from you.
        </motion.p>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {contacts.map((contact, i) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith('mailto') ? undefined : '_blank'}
              rel={contact.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -3, transition: { duration: 0.15 } }}
              className="group flex items-center gap-4 bg-card border border-lavender/10 rounded-2xl p-5 hover:border-pink-soft/25 transition-colors duration-300 text-left"
              aria-label={contact.label}
            >
              <div className="w-10 h-10 rounded-xl bg-lavender/8 border border-lavender/12 flex items-center justify-center flex-shrink-0 group-hover:border-pink-soft/30 group-hover:bg-pink-soft/8 transition-colors duration-300">
                <contact.icon size={18} className="text-lavender/50 group-hover:text-pink-soft transition-colors duration-300" />
              </div>
              <div>
                <p className="font-body text-sm font-medium text-lavender/80 group-hover:text-lavender transition-colors">{contact.label}</p>
                <p className="font-body text-xs text-lavender/35 truncate max-w-[180px]">{contact.description}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Closing note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="font-display text-xl italic text-lavender/30"
        >
          Looking forward to it ✦
        </motion.p>
      </div>
    </section>
  )
}
