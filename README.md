# Turborepo Demo Projesi

Bu repo, Turborepo'nun temel özelliklerini ve avantajlarını gösteren bir demo projesidir.

![Turborepo Logo](https://turbo.build/images/docs/repo/repo-hero-logo-dark.svg)

## Proje Hakkında

Bu demo projesi, Turborepo kullanarak nasıl monorepo yapısında çalışabileceğinizi göstermektedir. Proje yapısı şu şekildedir:

```
demo-turborepo/
├── apps/
│   ├── docs/   # Port 3001'de çalışan dokümantasyon uygulaması
│   └── web/    # Port 3000'de çalışan ana web uygulaması
├── packages/
│   ├── ui/     # Her iki uygulamanın paylaştığı UI bileşenleri
│   └── config/ # Ortak yapılandırma dosyaları
├── package.json
└── turbo.json  # Turborepo pipeline yapılandırması
```

### Özellikler

- **İki Next.js Uygulaması**: Hem web (port 3000) hem de dokümantasyon (port 3001) uygulamaları
- **Paylaşılan UI Kütüphanesi**: Her iki uygulama da aynı `ui` paketini import ederek ortak bileşenleri kullanıyor
- **TypeScript Desteği**: `next.config.js` dosyalarında `transpilePackages: ["ui"]` ayarı sayesinde TypeScript dosyaları sorunsuz derleniyor
- **Hızlı Geliştirme Döngüsü**: Turborepo'nun önbellek sistemi sayesinde değişmeyen paketlerin build işlemleri tekrarlanmıyor
- **Paralel Task Çalıştırma**: Bağımsız işler otomatik olarak paralel yürütülüyor

## Kurulum ve Çalıştırma

### Önemli Not

Bu demo projesi, workspace protokolünü destekleyen bir paket yöneticisi gerektirmektedir. npm ile kurulum yapmaya çalışırsanız `Unsupported URL Type "workspace:"` hatası alabilirsiniz. Bu nedenle, pnpm kullanmanız önerilir.

### Adımlar

1. pnpm'i yükleyin (eğer yüklü değilse):

```bash
# pnpm'i yüklemek için
npm install -g pnpm
```

2. Bağımlılıkları yükleyin:

```bash
pnpm install
```

3. Geliştirme modunda başlatın:

```bash
pnpm dev
```

Bu komut, hem web (3000) hem de dokümantasyon (3001) uygulamalarını geliştirme modunda başlatacaktır.

### Portlar

Web uygulaması http://localhost:3000 adresinde, dokümantasyon uygulaması ise http://localhost:3001 adresinde çalışacaktır.

## Yararlı Komutlar

```bash
# Tüm uygulamaları ve paketleri geliştirme modunda başlatır
pnpm dev

# Tüm uygulamaları ve paketleri build eder
pnpm build

# Lint işlemini tüm workspace'lerde çalıştırır
pnpm lint

# Belirli bir workspace'de komut çalıştırır (örn. sadece web uygulamasını build etmek için)
pnpm run build --filter=web
```

### Sorun Giderme

- **Port Çakışması**: Eğer 3001 portu zaten kullanımdaysa, docs uygulamasının package.json dosyasındaki port numarasını değiştirebilirsiniz.
- **Workspace Hatası**: Eğer workspace protokolü ile ilgili hatalar alıyorsanız, projenin kök dizininde bir `pnpm-workspace.yaml` dosyası olduğundan emin olun.
