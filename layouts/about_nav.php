        <nav class="interiorNav col-sm-12 text-center">
            <ul class="list-inline">
                {exp:channel:entries 
                        channel="menu_items"
                        orderby="link_weight"
                        sort="asc"
                        search:nav_language = "{embed:language}"
                        search:associated_menu = "About Sub Nav"
                }    
                   <li><a href="{path='{nav_link_path}'}">{title}</a></li>
                {/exp:channel:entries}      
			</ul>
        </nav><!-- END nav.interiorNav -->