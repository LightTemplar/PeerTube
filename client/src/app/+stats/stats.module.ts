import { ChartModule } from 'primeng/chart'
import { NgModule } from '@angular/core'
import { SharedGlobalIconModule } from '@app/shared/shared-icons'
import { SharedMainModule } from '@app/shared/shared-main'
import { StatsRoutingModule } from './stats-routing.module'
import { VideoStatsComponent, VideoStatsService } from './video'

@NgModule({
  imports: [
    StatsRoutingModule,

    SharedMainModule,
    SharedGlobalIconModule,

    ChartModule
  ],

  declarations: [
    VideoStatsComponent
  ],

  exports: [],
  providers: [
    VideoStatsService
  ]
})
export class StatsModule { }
