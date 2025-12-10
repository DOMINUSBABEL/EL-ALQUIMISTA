import { Language } from './types';

export const TRANSLATIONS = {
  es: {
    login: { identity: "Identidad", secret: "Clave Secreta", forgot: "¿Olvidaste la clave?", enter: "INGRESAR", error: "Credenciales Inválidas", privacy: "Privacidad", terms: "Términos", help: "Ayuda", tagline: "Unlock the Essence" },
    welcome: { title: "ALQUIMISTA", start: "INICIAR RITUAL", quick: "MODO RÁPIDO", archive: "ACCEDER AL ARCHIVO", quote: "La materia no se crea ni se destruye, solo se transmuta en perfección líquida.", energy: "Energía", matter: "Materia", spirit: "Espíritu" },
    quiz: { phase: "Fase", of: "de", alchemy: "ALQUIMISTA" },
    result: { success: "Resultado Exitoso", elements: "ELEMENTOS", algorithm: "ALGORITMO", analysis: "Análisis Molecular", restart: "Reiniciar Sistema", archive: "Archivar", glassware: "Cristalería", garnish: "Garnish", generating: "Materializando..." },
    history: { title: "ARCHIVOS", subtitle: "Registro Alquímico", recent: "DESCUBRIMIENTOS RECIENTES", master: "MATRIZ MAESTRA", empty: "No hay datos registrados en la memoria local.", db: "BASE DE DATOS" },
    quick: { title: "TRIADA DEL DESTINO", subtitle: "Procesamiento Rápido", desc: "Algoritmos predictivos han seleccionado tres caminos. Elige tu vector.", option: "Opción", start: "Iniciar", cancel: "Cancelar Operación" },
    loading: { title: "TRANSMUTANDO", ars: "Ars Magna" }
  },
  en: {
    login: { identity: "Identity", secret: "Secret Key", forgot: "Forgot Key?", enter: "ENTER", error: "Invalid Credentials", privacy: "Privacy", terms: "Terms", help: "Help", tagline: "Unlock the Essence" },
    welcome: { title: "ALCHEMIST", start: "BEGIN RITUAL", quick: "QUICK MODE", archive: "ACCESS ARCHIVE", quote: "Matter is neither created nor destroyed, only transmuted into liquid perfection.", energy: "Energy", matter: "Matter", spirit: "Spirit" },
    quiz: { phase: "Phase", of: "of", alchemy: "ALCHEMIST" },
    result: { success: "Successful Result", elements: "ELEMENTS", algorithm: "ALGORITHM", analysis: "Molecular Analysis", restart: "System Restart", archive: "Archive", glassware: "Glassware", garnish: "Garnish", generating: "Materializing..." },
    history: { title: "ARCHIVES", subtitle: "Alchemical Register", recent: "RECENT DISCOVERIES", master: "MASTER MATRIX", empty: "No data registered in local memory.", db: "DATABASE" },
    quick: { title: "TRIAD OF DESTINY", subtitle: "Quick Processing", desc: "Predictive algorithms have selected three paths. Choose your vector.", option: "Option", start: "Start", cancel: "Cancel Operation" },
    loading: { title: "TRANSMUTING", ars: "Ars Magna" }
  },
  fr: {
    login: { identity: "Identité", secret: "Clé Secrète", forgot: "Clé oubliée ?", enter: "ENTRER", error: "Identifiants Invalides", privacy: "Confidentialité", terms: "Conditions", help: "Aide", tagline: "Déverrouiller l'Essence" },
    welcome: { title: "ALCHIMISTE", start: "LANCER LE RITUEL", quick: "MODE RAPIDE", archive: "ACCÉDER AUX ARCHIVES", quote: "La matière ne se crée ni ne se détruit, elle se transmute en perfection liquide.", energy: "Énergie", matter: "Matière", spirit: "Esprit" },
    quiz: { phase: "Phase", of: "de", alchemy: "ALCHIMISTE" },
    result: { success: "Résultat Réussi", elements: "ÉLÉMENTS", algorithm: "ALGORITHME", analysis: "Analyse Moléculaire", restart: "Redémarrer Système", archive: "Archiver", glassware: "Verrerie", garnish: "Garniture", generating: "Matérialisation..." },
    history: { title: "ARCHIVES", subtitle: "Registre Alchimique", recent: "DÉCOUVERTES RÉCENTES", master: "MATRICE MAÎTRE", empty: "Aucune donnée enregistrée.", db: "BASE DE DONNÉES" },
    quick: { title: "TRIADE DU DESTIN", subtitle: "Traitement Rapide", desc: "Les algorithmes prédictifs ont sélectionné trois voies. Choisissez votre vecteur.", option: "Option", start: "Lancer", cancel: "Annuler l'Opération" },
    loading: { title: "TRANSMUTATION", ars: "Ars Magna" }
  },
  de: {
    login: { identity: "Identität", secret: "Geheimschlüssel", forgot: "Schlüssel vergessen?", enter: "EINTRETEN", error: "Ungültige Anmeldeinformationen", privacy: "Datenschutz", terms: "Bedingungen", help: "Hilfe", tagline: "Entsperre die Essenz" },
    welcome: { title: "ALCHEMIST", start: "RITUAL BEGINNEN", quick: "SCHNELLMODUS", archive: "ARCHIV ZUGREIFEN", quote: "Materie wird weder geschaffen noch zerstört, nur in flüssige Perfektion verwandelt.", energy: "Energie", matter: "Materie", spirit: "Geist" },
    quiz: { phase: "Phase", of: "von", alchemy: "ALCHEMIST" },
    result: { success: "Erfolgreiches Ergebnis", elements: "ELEMENTE", algorithm: "ALGORITHMUS", analysis: "Molekulare Analyse", restart: "System Neustart", archive: "Archivieren", glassware: "Glaswaren", garnish: "Garnitur", generating: "Materialisierung..." },
    history: { title: "ARCHIVE", subtitle: "Alchemistisches Register", recent: "JÜNGSTE ENTDECKUNGEN", master: "MEISTERMATRIX", empty: "Keine Daten im lokalen Speicher.", db: "DATENBANK" },
    quick: { title: "TRIADE DES SCHICKSALS", subtitle: "Schnellverarbeitung", desc: "Vorhersagealgorithmen haben drei Wege gewählt. Wähle deinen Vektor.", option: "Option", start: "Starten", cancel: "Vorgang abbrechen" },
    loading: { title: "TRANSMUTATION", ars: "Ars Magna" }
  },
  ru: {
    login: { identity: "Личность", secret: "Секретный ключ", forgot: "Забыли ключ?", enter: "ВОЙТИ", error: "Неверные данные", privacy: "Конфиденциальность", terms: "Условия", help: "Помощь", tagline: "Раскрой Сущность" },
    welcome: { title: "АЛХИМИК", start: "НАЧАТЬ РИТУАЛ", quick: "БЫСТРЫЙ РЕЖИМ", archive: "АРХИВ", quote: "Материя не создается и не уничтожается, лишь трансмутирует в жидкое совершенство.", energy: "Энергия", matter: "Материя", spirit: "Дух" },
    quiz: { phase: "Фаза", of: "из", alchemy: "АЛХИМИК" },
    result: { success: "Успешный результат", elements: "ЭЛЕМЕНТЫ", algorithm: "АЛГОРИТМ", analysis: "Молекулярный анализ", restart: "Перезапуск системы", archive: "Архивировать", glassware: "Посуда", garnish: "Гарнир", generating: "Материализация..." },
    history: { title: "АРХИВЫ", subtitle: "Алхимический реестр", recent: "НЕДАВНИЕ ОТКРЫТИЯ", master: "МАСТЕР МАТРИЦА", empty: "Нет данных в локальной памяти.", db: "БАЗА ДАННЫХ" },
    quick: { title: "ТРИАДА СУДЬБЫ", subtitle: "Быстрая обработка", desc: "Алгоритмы выбрали три пути. Выберите свой вектор.", option: "Опция", start: "Начать", cancel: "Отмена" },
    loading: { title: "ТРАНСМУТАЦИЯ", ars: "Ars Magna" }
  },
  zh: {
    login: { identity: "身份", secret: "密钥", forgot: "忘记密钥？", enter: "进入", error: "凭证无效", privacy: "隐私", terms: "条款", help: "帮助", tagline: "解锁本质" },
    welcome: { title: "炼金术士", start: "开始仪式", quick: "快速模式", archive: "访问档案", quote: "物质不灭，只会转化为液态的完美。", energy: "能量", matter: "物质", spirit: "精神" },
    quiz: { phase: "阶段", of: "/", alchemy: "炼金术士" },
    result: { success: "结果成功", elements: "元素", algorithm: "算法", analysis: "分子分析", restart: "重启系统", archive: "归档", glassware: "玻璃器皿", garnish: "装饰", generating: "正在具象化..." },
    history: { title: "档案", subtitle: "炼金术记录", recent: "最近发现", master: "主矩阵", empty: "本地存储中无数据。", db: "数据库" },
    quick: { title: "命运三位一体", subtitle: "快速处理", desc: "预测算法已选择三条路径。选择你的向量。", option: "选项", start: "启动", cancel: "取消操作" },
    loading: { title: "嬗变中", ars: "Ars Magna" }
  },
  pt: {
    login: { identity: "Identidade", secret: "Chave Secreta", forgot: "Esqueceu a chave?", enter: "ENTRAR", error: "Credenciais Inválidas", privacy: "Privacidade", terms: "Termos", help: "Ajuda", tagline: "Desbloqueie a Essência" },
    welcome: { title: "ALQUIMISTA", start: "INICIAR RITUAL", quick: "MODO RÁPIDO", archive: "ACESSAR ARQUIVO", quote: "A matéria não é criada nem destruída, apenas transmutada em perfeição líquida.", energy: "Energia", matter: "Matéria", spirit: "Espírito" },
    quiz: { phase: "Fase", of: "de", alchemy: "ALQUIMISTA" },
    result: { success: "Resultado com Sucesso", elements: "ELEMENTOS", algorithm: "ALGORITMO", analysis: "Análise Molecular", restart: "Reiniciar Sistema", archive: "Arquivar", glassware: "Copos", garnish: "Guarnição", generating: "Materializando..." },
    history: { title: "ARQUIVOS", subtitle: "Registro Alquímico", recent: "DESCOBERTAS RECENTES", master: "MATRIZ MESTRA", empty: "Nenhum dado registrado na memória local.", db: "BANCO DE DADOS" },
    quick: { title: "TRÍADE DO DESTINO", subtitle: "Processamento Rápido", desc: "Algoritmos preditivos selecionaram três caminhos. Escolha seu vetor.", option: "Opção", start: "Iniciar", cancel: "Cancelar Operação" },
    loading: { title: "TRANSMUTANDO", ars: "Ars Magna" }
  },
  ar: {
    login: { identity: "الهوية", secret: "المفتاح السري", forgot: "نسيت المفتاح؟", enter: "دخول", error: "بيانات الاعتماد غير صالحة", privacy: "الخصوصية", terms: "الشروط", help: "مساعدة", tagline: "اكتشف الجوهر" },
    welcome: { title: "الكيميائي", start: "بدء الطقوس", quick: "الوضع السريع", archive: "الوصول للأرشيف", quote: "المادة لا تفنى ولا تستحدث، بل تتحول إلى كمال سائل.", energy: "طاقة", matter: "مادة", spirit: "روح" },
    quiz: { phase: "مرحلة", of: "من", alchemy: "الكيميائي" },
    result: { success: "نتيجة ناجحة", elements: "العناصر", algorithm: "الخوارزمية", analysis: "التحليل الجزيئي", restart: "إعادة تشغيل النظام", archive: "أرشفة", glassware: "الأواني الزجاجية", garnish: "زينة", generating: "تجسيد..." },
    history: { title: "الأرشيف", subtitle: "السجل الكيميائي", recent: "اكتشافات حديثة", master: "المصفوفة الرئيسية", empty: "لا توجد بيانات مسجلة في الذاكرة المحلية.", db: "قاعدة البيانات" },
    quick: { title: "ثلاثية القدر", subtitle: "معالجة سريعة", desc: "لقد اختارت الخوارزميات التنبؤية ثلاثة مسارات. اختر متجهك.", option: "خيار", start: "بدء", cancel: "إلغاء العملية" },
    loading: { title: "تحويل", ars: "الفن العظيم" }
  }
};
