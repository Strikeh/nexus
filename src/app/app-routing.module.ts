import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { InquiryComponent } from './inquiry/inquiry.component';
import { TokenizationComponent } from './develop/tokenization/tokenization.component';
import { BubbleComponent } from './develop/bubble/bubble.component';
import { OperatingSystemComponent } from './technology/operating-system/operating-system.component';
import { BlogComponent } from './resources/blog/blog.component';
import { BlockchainComponent } from './technology/blockchain/blockchain.component';
import { DecentralizedInternetComponent } from './technology/decentralized-internet/decentralized-internet.component';
import { BuyNexusComponent } from './use/buy-nexus/buy-nexus.component';
import { RoadmapComponent } from './technology/roadmap/roadmap.component';
import { WhitepapersComponent } from './whitepapers/whitepapers.component';
import { LandingComponent } from './landing/landing.component';
import { TeamComponent } from './team/team.component';
import { VideosComponent } from './resources/videos/videos.component';
import { WalletComponent } from './use/wallet/wallet.component';
import { AssetsComponent } from './use/assets/assets.component';
import { StakeMineComponent } from './use/stake-mine/stake-mine.component';
import { ModulesComponent } from './develop/modules/modules.component';
import { HybridNetworksComponent } from './develop/hybrid-networks/hybrid-networks.component';
import { ContractsComponent } from './develop/contracts/contracts.component';
import { IntegratedApiComponent } from './develop/integrated-api/integrated-api.component';
import { NamespacesComponent } from './use/namespaces/namespaces.component';
import { DappsComponent } from './use/dapps/dapps.component';
import { EconomicsComponent } from './resources/economics/economics.component';
import { SecurityAuditComponent } from './resources/security-audit/security-audit.component';
import { BrandingComponent } from './resources/branding/branding.component';
import { TransactComponent } from './use/transact/transact.component';
import { UsecasesComponent } from './develop/usecases/usecases.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsComponent } from './terms/terms.component';
import { GlossaryComponent } from './resources/glossary/glossary.component';
import { FAQComponent } from './resources/faq/faq.component';
import { MetricsComponent } from './metrics/metrics.component';
import { ResourceHubComponent } from './resources/resource-hub/resource-hub.component';

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'team', component: TeamComponent },
  { path: 'roadmap', component: RoadmapComponent },
  { path: 'buynexus', component: BuyNexusComponent },
  { path: 'whitepapers', component: WhitepapersComponent },
  { path: 'decentralizedinternet', component: DecentralizedInternetComponent },
  { path: 'blockchain', component: BlockchainComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'operatingsystem', component: OperatingSystemComponent },
  { path: 'tokenization', component: TokenizationComponent },
  { path: 'bubble', component: BubbleComponent },
  { path: 'wallet', component: WalletComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'integratedapi', component: IntegratedApiComponent },
  { path: 'contracts', component: ContractsComponent },
  { path: 'hybrid-networks', component: HybridNetworksComponent },
  { path: 'modules', component: ModulesComponent },
  { path: 'usecases', component: UsecasesComponent },
  { path: 'transact', component: TransactComponent },
  { path: 'stake-mine', component: StakeMineComponent },
  { path: 'assets', component: AssetsComponent },
  { path: 'namespaces', component: NamespacesComponent },
  { path: 'dapps', component: DappsComponent },
  { path: 'security', component: SecurityAuditComponent },
  { path: 'economics', component: EconomicsComponent },
  { path: 'branding', component: BrandingComponent },
  { path: 'privacypolicy', component: PrivacyPolicyComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'glossary', component: GlossaryComponent },
  { path: 'inquire', component: InquiryComponent },
  { path: 'visitors', component: MetricsComponent },
  { path: 'resourcehub', component: ResourceHubComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
