/* Dans votre fichier CSS global ou tailwind.config.js */
@keyframes float {
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-20px) scale(1.05); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.btn-gold {
  @apply bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 rounded-lg font-semibold shadow-lg hover:shadow-amber-500/25 transition-all duration-300;
}

.btn-dark {
  @apply bg-slate-700/80 text-white border border-slate-600 rounded-lg font-semibold backdrop-blur-sm hover:bg-slate-600/80 transition-all duration-300;
}