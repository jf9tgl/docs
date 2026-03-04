import Link from 'next/link';
import { Package, BookOpen, Github, ExternalLink, Puzzle, Wrench, Zap } from 'lucide-react';

const VPM_REPO_URL = 'https://vpm.rierun.dev/index.json';
const GITHUB_URL = 'https://github.com/jf9tgl/docs';

const tools = [
  {
    icon: Puzzle,
    title: 'S1000',
    description: 'SaccFlight向けデジタル計器システム。高度計、速度計、コンパスなどを提供。',
    href: '/docs/s1000',
  },
  {
    icon: Wrench,
    title: 'Armature Scale Copier',
    description: 'アーマチュアのスケールやコンポーネント等ををコピーするツールです。',
    href: '/docs/armature-scale-copier',
  }
];

export default function HomePage() {
  return (
    <main className="flex flex-col items-center px-4 py-20 gap-16">
      {/* Hero */}
      <section className="flex flex-col items-center text-center gap-6 max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-muted px-4 py-1.5 text-sm text-fd-muted-foreground">
          <Package className="size-4" />
          VRChat World Gimmicks &amp; Tools
        </div>

        <h1 className="text-5xl font-bold tracking-tight text-fd-foreground sm:text-6xl">
          樰技局ドキュメント
        </h1>

        <p className="text-lg text-fd-muted-foreground leading-relaxed">
          ドキュメントを置いてあります。
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {/* VPM追加ボタン */}
          <a
            href={`vcc://vpm/addRepo?url=${encodeURIComponent(VPM_REPO_URL)}`}
            className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-6 py-3 text-sm font-semibold text-fd-primary-foreground shadow-sm transition-opacity hover:opacity-90 active:opacity-80"
          >
            <Package className="size-4" />
            VPMリポジトリを追加
          </a>

          {/* ドキュメントへのリンク */}
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-6 py-3 text-sm font-semibold text-fd-foreground shadow-sm transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
          >
            <BookOpen className="size-4" />
            ドキュメントを見る
          </Link>

          {/* GitHub */}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-6 py-3 text-sm font-semibold text-fd-foreground shadow-sm transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
          >
            <Github className="size-4" />
            GitHub
          </a>
        </div>
      </section>

      {/* インストール手順 */}
      <section className="w-full max-w-2xl rounded-xl border border-fd-border bg-fd-card p-6">
        <h2 className="mb-4 text-lg font-semibold text-fd-foreground flex items-center gap-2">
          <Package className="size-5 text-fd-primary" />
          インストール方法
        </h2>
        <ol className="space-y-3 text-sm text-fd-muted-foreground">
          <li className="flex gap-3">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-fd-primary/10 text-xs font-bold text-fd-primary">1</span>
            <span>上の <strong className="text-fd-foreground">「VPMリポジトリを追加」</strong> ボタンをクリックし、ALCOM もしくは VRChat Creator Companion (VCC) でリポジトリを追加します。</span>
          </li>
          <li className="flex gap-3">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-fd-primary/10 text-xs font-bold text-fd-primary">2</span>
            <span>ALCOM もしくは VCC のプロジェクト管理画面から、使用したいパッケージを選択してインストールします。</span>
          </li>
          <li className="flex gap-3">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-fd-primary/10 text-xs font-bold text-fd-primary">3</span>
            <span>Unity プロジェクトを開き、パッケージが正しくインポートされていることを確認します。</span>
          </li>
        </ol>
        <div className="mt-4 rounded-lg bg-fd-muted px-4 py-2 text-xs text-fd-muted-foreground font-mono break-all">
          {VPM_REPO_URL}
        </div>
      </section>

      {/* ツール一覧 */}
      <section className="w-full max-w-4xl">
        <h2 className="mb-8 text-center text-2xl font-bold text-fd-foreground">収録コンテンツ</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.href}
                href={tool.href}
                className="group flex flex-col gap-3 rounded-xl border border-fd-border bg-fd-card p-6 shadow-sm transition-all hover:border-fd-primary/50 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-fd-primary/10 text-fd-primary group-hover:bg-fd-primary/20 transition-colors">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-semibold text-fd-foreground">{tool.title}</h3>
                </div>
                <p className="text-sm text-fd-muted-foreground leading-relaxed">{tool.description}</p>
                <div className="mt-auto flex items-center gap-1 text-xs text-fd-primary font-medium">
                  ドキュメントを見る
                  <ExternalLink className="size-3" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}

