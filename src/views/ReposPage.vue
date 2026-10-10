<template>
  <div class="repos">
    <router-link to="/" class="resume-back" aria-label="返回首页">
      <i class="fas fa-arrow-left"></i>
    </router-link>

    <!-- MASTHEAD -->
    <header class="masthead masthead--repos">
      <div class="sheet sheet--full">
        <div class="rise">
          <p class="mast-kicker">代码仓库 · Repositories</p>
          <h1 class="mast-name">开源仓库</h1>
          <p class="mast-latin">GITHUB.COM/ZYP556678</p>
          <p class="mast-role">{{ repos.length }} 个公开仓库。从 Spring 微服务到跨端应用，从系统工具到 AI 实践。</p>
          <div class="mast-lang">
            <div class="lang-bar" role="img" :aria-label="`语言构成：${summaryLegend.map(l => `${l.name} ${l.pct}%`).join('，')}`">
              <span
                v-for="seg in summaryBar"
                :key="seg.name"
                class="lang-seg"
                :style="{ width: seg.pct + '%', background: seg.color }"
                :title="`${seg.name} ${seg.pct}%`"
              ></span>
            </div>
            <div class="lang-legend">
              <span v-for="l in summaryLegend" :key="l.name" class="lang-legend-item">
                <span class="lang-swatch" :style="{ background: l.color }"></span>
                {{ l.name }} <span class="lang-pct">{{ l.pct }}%</span>
              </span>
            </div>
          </div>
          <div class="actions">
            <a href="https://github.com/zyp556678?tab=repositories" target="_blank" rel="noopener noreferrer" class="btn btn--solid">
              <i class="fab fa-github"></i> 在 GitHub 上查看
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- CATEGORY NAV -->
    <nav class="cat-nav" aria-label="仓库分类">
      <div class="sheet sheet--full">
        <ul class="cat-list">
          <li v-for="g in groups" :key="g.name">
            <a :href="'#' + slug(g.name)" class="cat-link">
              <span class="cat-num">{{ g.num }}</span>
              <span class="cat-name">{{ g.name }}</span>
              <span class="cat-count">{{ g.repos.length }}</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- GROUPS -->
    <section v-for="group in groups" :id="slug(group.name)" :key="group.name" class="sec">
      <div class="sheet">
        <aside class="rail">
          <span class="rail-num">{{ group.num }}</span>
          <span class="rail-name">{{ group.en }}</span>
        </aside>
        <div class="body">
          <div class="cat-head">
            <h2 class="cat-title">{{ group.name }}</h2>
            <span class="cat-head-en">{{ group.en }}</span>
          </div>

          <article v-for="repo in group.repos" :id="repo.name" :key="repo.name" class="product">
            <!-- Visual panel -->
            <div class="product-visual">
              <div class="pv-top">
                <span class="pv-idx">{{ group.num }}.{{ String(group.repos.indexOf(repo) + 1).padStart(2, '0') }}</span>
                <span class="pv-kind">{{ repo.kind }}</span>
              </div>
              <div class="pv-mark" aria-hidden="true">
                <span class="pv-mark-text">{{ repo.title }}</span>
              </div>
              <div class="pv-bar">
                <span
                  v-for="l in repo.langs"
                  :key="l.name"
                  class="pv-seg"
                  :style="{ width: l.pct + '%', background: langColor(l.name) }"
                  :title="`${l.name} ${l.pct}%`"
                ></span>
              </div>
              <span class="pv-when">{{ repo.when }}</span>
            </div>

            <!-- Spec panel -->
            <div class="product-spec">
              <p class="product-repo">zyp556678/{{ repo.name }}</p>
              <h3 class="product-title">{{ repo.title }}</h3>
              <p class="product-sub">{{ repo.sub }}</p>
              <p class="product-desc">{{ repo.desc }}</p>

              <dl class="product-rows">
                <div class="product-row">
                  <dt>类型</dt>
                  <dd>{{ repo.kind }} · {{ repo.scale }}</dd>
                </div>
                <div class="product-row">
                  <dt>语言</dt>
                  <dd>
                    <span class="product-langs">
                      <span v-for="l in repo.langs" :key="l.name" class="product-lang">
                        <span class="lang-swatch" :style="{ background: langColor(l.name) }"></span>
                        {{ l.name }} <span class="lang-pct">{{ l.pct }}%</span>
                      </span>
                    </span>
                  </dd>
                </div>
                <div class="product-row">
                  <dt>要点</dt>
                  <dd>
                    <ul class="product-points">
                      <li v-for="h in repo.highlights" :key="h">{{ h }}</li>
                    </ul>
                  </dd>
                </div>
              </dl>

              <div class="product-tags">
                <span v-for="t in repo.tags" :key="t" class="tag">{{ t }}</span>
              </div>

              <div class="product-actions">
                <a :href="repo.url" target="_blank" rel="noopener noreferrer" class="btn btn--solid">
                  <i class="fas fa-code"></i> 查看源代码
                </a>
                <a v-if="repo.home" :href="repo.home" target="_blank" rel="noopener noreferrer" class="btn btn--line">
                  <i class="fas fa-globe"></i> 在线预览
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-inner">
        <span>© 2026 ZHANG YUPENG</span>
        <span>数据取自 GitHub · 2026.10</span>
      </div>
    </footer>
  </div>
</template>

<script>
import { GROUPS, ALL_REPOS, langColor } from '../data/repos.js'

const SUMMARY = [
  { name: 'JavaScript', pct: 26.5 },
  { name: 'CSS', pct: 21.9 },
  { name: 'Go', pct: 18.0 },
  { name: 'HTML', pct: 10.2 },
  { name: 'TypeScript', pct: 8.9 },
  { name: 'Java', pct: 4.6 },
  { name: 'Dart', pct: 2.9 },
  { name: 'Vue', pct: 2.7 },
  { name: 'Python', pct: 2.1 },
  { name: '其他', pct: 2.2, isOther: true }
]

export default {
  name: 'ReposPage',
  data() {
    return {
      groups: GROUPS,
      summary: SUMMARY
    }
  },
  computed: {
    repos() { return ALL_REPOS },
    summaryBar() {
      return this.summary.map((l) => ({ ...l, color: l.isOther ? langColor('Other') : langColor(l.name) }))
    },
    summaryLegend() {
      return this.summary
        .filter((l) => l.pct >= 2)
        .map((l) => ({ name: l.name, pct: l.pct, color: l.isOther ? langColor('Other') : langColor(l.name) }))
    }
  },
  methods: {
    langColor,
    slug(name) {
      const map = { 产品项目: 'products', 工程工具: 'tooling', 'AI 实践': 'ai', 本站: 'site' }
      return map[name] || name
    },
    scrollToDeepLink() {
      const key = this.$route.query.r
      if (!key) return
      const el = document.getElementById(String(key))
      if (!el) return
      // Content above the row grows while webfonts and the icon font load,
      // so re-anchor until the target's position holds steady.
      let last = null
      let stable = 0
      let tries = 0
      const settle = () => {
        tries += 1
        const y = el.getBoundingClientRect().top + window.scrollY - 100
        if (y === last) {
          stable += 1
          if (stable >= 3) return
        } else {
          stable = 0
          last = y
          window.scrollTo({ top: y, behavior: 'auto' })
        }
        if (tries < 40) setTimeout(settle, 150)
      }
      settle()
    }
  },
  mounted() {
    this.$nextTick(this.scrollToDeepLink)
  }
}
</script>
